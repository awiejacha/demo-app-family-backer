import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import Person from '../../../domain/ValueObjects/Person';

type Params = {
  id: string;
  assignee: string;
};

export default async (fastify: FastifyInstance) => {
  fastify.put('/:id/assign/:assignee', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          assignee: {
            type: 'string',
            enum: Person.ALL_PERSONS,
          },
        },
      },
      response: {
        200: { $ref: 'responseTask#' },
        404: {},
        409: { $ref: 'responseError#' },
      },
    },
    handler: async (
      request: FastifyRequest<{ Params: Params }>,
      reply: FastifyReply,
    ): Promise<void> => {
      const assignedTask = await fastify.taskService.assign(
        request.params.id,
        request.params.assignee,
      );
      reply.code(200).send(assignedTask.toPresentation());
    },
  });
};
