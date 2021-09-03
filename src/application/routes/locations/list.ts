import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import Location from '../../../domain/ValueObjects/Location';

export default async (fastify: FastifyInstance) => {
  fastify.get('/list', {
    schema: {
      response: {
        200: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    },
    handler: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
      reply.code(200).send(Location.ALL_LOCATIONS);
    },
  });
};
