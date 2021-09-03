import StatusCodeError from './StatusCodeError';

export default class ProgressNotPossibleError extends StatusCodeError {
  public readonly statusCode: number = 409;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = ProgressNotPossibleError.name;
  }
}
