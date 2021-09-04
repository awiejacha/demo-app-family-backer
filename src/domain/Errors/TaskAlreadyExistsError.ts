import StatusCodeError from './StatusCodeError';

export default class TaskAlreadyExistsError extends StatusCodeError {
  public readonly statusCode: number = 409;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = TaskAlreadyExistsError.name;
  }
}
