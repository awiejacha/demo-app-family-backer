import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

type Params = {
  id: string;
  assignee: string;
};

export default async (fastify: FastifyInstance) => {
  fastify.put<{ Params: Params }>('/:id/progress', {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
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
      const progressedTask = await fastify.taskService.progress(request.params.id);
      reply.code(200).send(progressedTask.toPresentation());
    },
  });
};
