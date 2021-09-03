import StatusCodeError from './StatusCodeError';

export default class TaskNotFoundError extends StatusCodeError {
  public readonly statusCode: number = 404;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = TaskNotFoundError.name;
  }
}
