import LocationNotApplicableError from '../Errors/LocationNotApplicableError';
import LogicError from '../Errors/LogicError';
import ProgressNotPossibleError from '../Errors/ProgressNotPossibleError';
import TaskNotAssignableError from '../Errors/TaskNotAssignableError';
import Location from './Location';
import Person from './Person';
import TaskDefinition from './TaskDefinition';
import TaskState from './TaskState';

export type TaskPresentation = {
  id: string;
  location: string;
  definition: string;
  state: string;
  assignee?: string;
  responsible?: string;
  isStale: boolean;
};

export default class Task {
  private taskState: TaskState;
  private taskAssignee?: Person;
  private taskResponsible?: Person;
  private isTaskStale?: boolean;

  constructor(
    public readonly id: string,
    public readonly location: Location,
    public readonly definition: TaskDefinition,
    state: TaskState,
    assignee?: Person,
    responsible?: Person,
    isStale?: boolean,
  ) {
    this.taskState = state;
    this.taskAssignee = assignee;
    this.taskResponsible = responsible;
    this.isTaskStale = isStale;

    if (location.isSpecified() && !definition.isLocationSpecific()) {
      throw new LocationNotApplicableError(
        `Task definition '${definition.name}' must not have specific location`);
    }

    if (!location.isSpecified() && definition.isLocationSpecific()) {
      throw new LocationNotApplicableError(
        `Task definition '${definition.name}' must have specific location`);
    }
  }

  get state(): TaskState {
    return this.taskState;
  }

  get isStale(): boolean {
    return this.isTaskStale === true;
  }

  public progress(): void {
    if (!this.taskAssignee) {
      throw new ProgressNotPossibleError('Must be assigned first');
    }

    this.taskState = this.taskState.getProgressed();
  }

  public regress(): void {
    this.taskState = this.taskState.getRegressed();

    if (this.taskState.name === TaskState.PENDING) {
      delete this.taskAssignee;
      delete this.taskResponsible;

      return;
    }

    if (this.taskState.name === TaskState.ONGOING) {
      if (!this.taskResponsible) {
        throw new LogicError('Ongoing task has no responsible person');
      }
      this.taskAssignee = new Person(this.taskResponsible.name);
    }
  }

  get assignee(): Person|undefined {
    return this.taskAssignee;
  }

  public assignTo(assignee: Person): void {
    if (this.taskState.name === TaskState.DONE) {
      throw new TaskNotAssignableError('Can not be reassigned when done');
    }

    if (this.taskState.name === TaskState.ONGOING) {
      throw new TaskNotAssignableError('Can not be reassigned when ongoing');
    }

    this.taskAssignee = assignee;

    if (!this.taskResponsible) {
      this.taskResponsible = new Person(this.taskAssignee.name);
    }
  }

  get responsible(): Person|undefined {
    return this.taskResponsible;
  }

  public makeStale(): void {
    this.isTaskStale = true;
  }

  public toPresentation(): TaskPresentation {
    const presentation: TaskPresentation = {
      id: this.id,
      location: this.location.name,
      definition: this.definition.name,
      state: this.taskState.name,
      isStale: this.isStale,
    };

    if (this.taskAssignee) {
      presentation.assignee = this.taskAssignee.name;
    }

    if (this.taskResponsible) {
      presentation.responsible = this.taskResponsible.name;
    }

    return presentation;
  }
}
