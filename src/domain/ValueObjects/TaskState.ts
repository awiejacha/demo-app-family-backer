import ProgressNotPossibleError from '../Errors/ProgressNotPossibleError';
import RegressNotPossibleError from '../Errors/RegressNotPossibleError';

export default class TaskState {
  public static readonly PENDING = 'pending';
  public static readonly ONGOING = 'ongoing';
  public static readonly IN_REVIEW = 'in_review';
  public static readonly DONE = 'done';
  public static readonly ALL_STATES = [
    TaskState.PENDING,
    TaskState.ONGOING,
    TaskState.IN_REVIEW,
    TaskState.DONE,
  ];

  constructor(public readonly name: string) {}

  getProgressed(): TaskState {
    if (this.name === TaskState.DONE) {
      throw new ProgressNotPossibleError('Already done');
    }

    return new TaskState(TaskState.ALL_STATES[TaskState.ALL_STATES.indexOf(this.name) + 1]);
  }

  getRegressed(): TaskState {
    if (this.name === TaskState.PENDING) {
      throw new RegressNotPossibleError('Already pending');
    }

    return new TaskState(TaskState.ALL_STATES[TaskState.ALL_STATES.indexOf(this.name) - 1]);
  }
}
