import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import buildRequestContext from '../utils/build-request-context';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
  fastify.setErrorHandler((
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    if (!error.statusCode) {
      error.statusCode = 500;
    }

    if (error.statusCode === 404) {
      fastify.logger.info(error.message, buildRequestContext(request, { error }));
      reply.status(error.statusCode).send();
    } else if (error.statusCode >= 500) {
      fastify.logger.error(error.message, buildRequestContext(request, { error }));
      reply.status(error.statusCode).send({
        errorMessage: error.message,
      });
    } else {
      fastify.logger.warn(error.message, buildRequestContext(request, { error }));
      reply.status(error.statusCode).send({
        errorMessage: error.message,
      });
    }
  });
});
