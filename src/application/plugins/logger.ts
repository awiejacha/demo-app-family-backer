import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import makeLogger from '../dependency-injection/make-logger';
import buildRequestContext from '../utils/build-request-context';

export type AppRequestLoggerMethod = (
  message: string,
  context?: any,
) => void;

export type AppRequestLogger = {
  debug: AppRequestLoggerMethod;
  info: AppRequestLoggerMethod;
  warn: AppRequestLoggerMethod;
  error: AppRequestLoggerMethod;
  fatal: AppRequestLoggerMethod;
};

export default fastifyPlugin(async (
  fastify: FastifyInstance) => {
  const logger = makeLogger();
  fastify.decorate('logger', logger);
  fastify.addHook('onRequest', async (request: FastifyRequest) => {
    fastify.logger.info(
      `Request '${request.id}' to '${request.url}'`,
      buildRequestContext(request),
    );
  });
  fastify.addHook('onSend', async (
    request: FastifyRequest,
    reply: FastifyReply,
    payload: any,
  ) => {
    fastify.logger.info(
      `Payload for request '${request.id}' to '${request.url}'`,
      buildRequestContext(request, {
        reply: {
          statusCode: reply.statusCode,
          headers: reply.getHeaders(),
          body: payload,
        },
      }),
    );
  });
  fastify.addHook('onResponse', async (request: FastifyRequest, reply: FastifyReply) => {
    fastify.logger.info(
      `Response sent for request '${request.id}' to '${request.url}'`,
      buildRequestContext(request, { responseTime: reply.getResponseTime() }),
    );
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    logger: AppRequestLogger;
  }
}
