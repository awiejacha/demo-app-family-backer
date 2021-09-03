import { FastifyInstance } from 'fastify';

export default (server: FastifyInstance) => {
  server.addSchema({
    $id: 'responseError',
    type: 'object',
    properties: {
      errorMessage: {
        type: 'string',
      },
    },
  });
};
