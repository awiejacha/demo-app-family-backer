export default abstract class StatusCodeError extends Error {
  public abstract readonly statusCode: number;

  protected constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = StatusCodeError.name;
  }
}
