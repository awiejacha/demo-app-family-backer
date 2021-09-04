import { Knex } from 'knex/types';
import TaskRepository from '../domain/TaskRepository';
import Location from '../domain/ValueObjects/Location';
import Person from '../domain/ValueObjects/Person';
import Task from '../domain/ValueObjects/Task';
import TaskDefinition from '../domain/ValueObjects/TaskDefinition';
import TaskState from '../domain/ValueObjects/TaskState';

type Row = {
  id: string;
  id_location: number;
  id_definition: number;
  id_state: number;
  id_assignee: number|null;
  id_responsible: number|null;
  is_stale: number;
};

const getIdLocation = (location: string): number =>
  Location.ALL_LOCATIONS.indexOf(location);

const getIdDefinition = (definition: string): number =>
  TaskDefinition.ALL_DEFINITIONS.indexOf(definition);

const getIdState = (state: string): number =>
  TaskState.ALL_STATES.indexOf(state);

const getIdPerson = (person: string): number =>
  Person.ALL_PERSONS.indexOf(person);

const getLocation = (locationId: number): Location =>
  new Location(Location.ALL_LOCATIONS[locationId]);

const getDefinition = (definitionId: number): TaskDefinition =>
  new TaskDefinition(TaskDefinition.ALL_DEFINITIONS[definitionId]);

const getState = (stateId: number): TaskState =>
  new TaskState(TaskState.ALL_STATES[stateId]);

const getPerson = (personId: number): Person =>
  new Person(Person.ALL_PERSONS[personId]);

const rowToTask = (row: Row): Task => {
  const assignee = row.id_assignee !== null ? getPerson(row.id_assignee) : undefined;
  const responsible = row.id_responsible !== null ? getPerson(row.id_responsible) : undefined;

  return new Task(
    row.id,
    getLocation(row.id_location),
    getDefinition(row.id_definition),
    getState(row.id_state),
    assignee,
    responsible,
    row.is_stale === 1,
  );
};

const taskToRow = (task: Task): Row => {
  return {
    id: task.id,
    id_location: getIdLocation(task.location.name),
    id_definition: getIdDefinition(task.definition.name),
    id_state: getIdState(task.state.name),
    id_assignee: task.assignee ? getIdPerson(task.assignee.name) : null,
    id_responsible: task.responsible ? getIdPerson(task.responsible.name) : null,
    is_stale: task.isStale ? 1 : 0,
  };
};

export default class KnexTaskRepository implements TaskRepository {
  constructor(private knex: Knex) {}

  async findById(id: string): Promise<Task|null> {
    const results: Row[] = await this.knex.select('*')
      .from('tasks')
      .where('id', id);
    return results.length ? rowToTask(results[0]) : null;
  }

  async findByLocationAndDefinition(
    location: Location, definition: TaskDefinition): Promise<Task|null> {
    const results: Row[] = await this.knex.select('*')
      .from('tasks')
      .where('id_definition', getIdDefinition(definition.name))
      .andWhere('id_location', getIdLocation(location.name));
    return results.length ? rowToTask(results[0]) : null;
  }

  // TODO: Manage timezones
  async findNotDoneOrDoneToday(): Promise<Task[]> {
    const results: Row[] = await this.knex.select('*')
      .from('tasks')
      .whereNot('id_state', getIdState(TaskState.DONE))
      .orWhere(
        'modified_at',
        '>=',
        new Date().toISOString().slice(0, 11),
      );
    return results.map(rowToTask);
  }

  async add(task: Task): Promise<void> {
    await this.knex('tasks')
      .insert(taskToRow(task))
      .onConflict('id')
      .merge()
    ;
  }
}
