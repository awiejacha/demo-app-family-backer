import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import TaskService from '../../domain/TaskService';
import makeTaskService from '../dependency-injection/make-task-service';

export default fastifyPlugin(async (
  fastify: FastifyInstance) => {
  fastify.decorate('taskService', makeTaskService());
});

declare module 'fastify' {
  export interface FastifyInstance {
    taskService: TaskService;
  }
}
