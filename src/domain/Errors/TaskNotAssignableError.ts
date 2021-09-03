import StatusCodeError from './StatusCodeError';

export default class TaskNotAssignableError extends StatusCodeError {
  public readonly statusCode: number = 409;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = TaskNotAssignableError.name;
  }
}
