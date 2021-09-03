import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import Task from '../../../domain/ValueObjects/Task';

export default async (fastify: FastifyInstance) => {
  fastify.get('/list', {
    schema: {
      response: {
        200: {
          type: 'array',
          items: { $ref: 'responseTask#' },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      const tasks = await fastify.taskService.list();
      reply.code(200).send(tasks.map((task: Task) => task.toPresentation()));
    },
  });
};
