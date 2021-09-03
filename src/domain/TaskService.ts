import SuchTaskAlreadyExistsError from './Errors/SuchTaskAlreadyExistsError';
import TaskNotFoundError from './Errors/TaskNotFoundError';
import IdGenerator from './IdGenerator';
import TaskRepository from './TaskRepository';
import Location from './ValueObjects/Location';
import Person from './ValueObjects/Person';
import Task from './ValueObjects/Task';
import TaskDefinition from './ValueObjects/TaskDefinition';
import TaskState from './ValueObjects/TaskState';

export default class TaskService {
  constructor(
    private readonly idGenerator: IdGenerator,
    private readonly repository: TaskRepository,
  ) {}

  public async list(): Promise<Task[]> {
    return this.repository.findNotDoneOrDoneToday();
  }

  public async create(locationName: string, definitionName: string): Promise<Task> {
    const task: Task = new Task(
      this.idGenerator.generate(),
      new Location(locationName),
      new TaskDefinition(definitionName),
      new TaskState(TaskState.PENDING),
    );

    await this.repository.add(task);

    return task;
  }

  public async createExclusive(locationName: string, definitionName: string): Promise<Task> {
    const location = new Location(locationName);
    const definition = new TaskDefinition(definitionName);
    const existingTask = await this.repository.findByLocationAndDefinition(location, definition);

    if (existingTask) {
      throw new SuchTaskAlreadyExistsError(`A task '${definition.name}' in '${location.name}' exists with id '${existingTask.id}'`);
    }

    return this.create(locationName, definitionName);
  }

  public async assign(taskId: string, assigneeName: string): Promise<Task> {
    const task = await this.findById(taskId);
    task.assignTo(new Person(assigneeName));
    await this.repository.add(task);

    return task;
  }

  public async progress(taskId: string): Promise<Task> {
    const task = await this.findById(taskId);
    task.progress();
    await this.repository.add(task);

    return task;
  }

  public async regress(taskId: string): Promise<Task> {
    const task = await this.findById(taskId);
    task.regress();
    await this.repository.add(task);

    return task;
  }

  private async findById(taskId: string): Promise<Task> {
    const task = await this.repository.findById(taskId);

    if (!task) {
      throw new TaskNotFoundError(`Task given id '${taskId}' not found`);
    }

    return task;
  }
}
