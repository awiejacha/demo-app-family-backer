import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import TaskDefinition from '../../../domain/ValueObjects/TaskDefinition';

export default async (fastify: FastifyInstance) => {
  fastify.get('/list', {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            locationSpecific: {
              type: 'array',
              items: { type: 'string' },
            },
            notLocationSpecific: {
              type: 'array',
              items: { type: 'string' },
            },
            all: {
              type: 'array',
              items: { type: 'string' },
            },
          },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      reply.code(200).send({
        locationSpecific: TaskDefinition.LOCATION_SPECIFIC_DEFINITIONS,
        notLocationSpecific: TaskDefinition.NOT_LOCATION_SPECIFIC_DEFINITIONS,
        all: TaskDefinition.ALL_DEFINITIONS,
      });
    },
  });
};
