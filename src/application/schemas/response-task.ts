import { FastifyInstance } from 'fastify';

export default (fastify: FastifyInstance) => {
  fastify.addSchema({
    $id: 'responseTask',
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      location: {
        type: 'string',
      },
      definition: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      assignee: {
        type: 'string',
      },
      responsible: {
        type: 'string',
      },
      isStale: {
        type: 'boolean',
      },
    },
  });
};
