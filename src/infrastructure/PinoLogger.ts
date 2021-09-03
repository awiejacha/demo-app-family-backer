import { pino } from 'pino';
import Logger from '../domain/Logger';

export default class PinoLogger implements Logger {
  constructor(
    private loggerInstance: pino.Logger,
  ) {}

  debug(message: string, context?: any): void {
    this.loggerInstance.debug({ ...context }, message);
  }

  info(message: string, context?: any): void {
    this.loggerInstance.info({ ...context }, message);
  }

  warn(message: string, context?: any): void {
    this.loggerInstance.warn({ ...context }, message);
  }

  error(message: string, context?: any): void {
    this.loggerInstance.error({ ...context }, message);
  }

  fatal(message: string, context?: any): void {
    this.loggerInstance.fatal({ ...context }, message);
  }
}
