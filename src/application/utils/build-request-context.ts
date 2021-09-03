import { FastifyRequest } from 'fastify';

export default (request: FastifyRequest, context?: any) => ({
  requestId: request.id,
  request: {
    body: request.body,
    query: request.query,
    params: request.params,
    headers: request.headers,
    ip: request.ip,
    ips: request.ips,
    hostname: request.hostname,
    protocol: request.protocol,
    url: request.url,
    method: request.method,
  },
  ...context,
});
