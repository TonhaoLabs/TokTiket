const Hapi = require('@hapi/hapi');
const HapiPino = require('hapi-pino');

const Logging = require('./infrastructure/logging');
const Router = require('./router');

const init = async ({ port, host }) => {
  const server = Hapi.server({
    port,
    host,
  });

  Router.routes.forEach((route) => server.route(route));

  await server.register({
    plugin: HapiPino,
    options: {
      instance: Logging.logger,
    },
  });

  return server;
};

module.exports = { init };
