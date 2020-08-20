const Hapi = require('@hapi/hapi');
const HapiPino = require('hapi-pino');
const Router = require('./router');

const init = async ({ port, host, env }) => {
  const server = Hapi.server({
    port,
    host,
  });

  Router.routes.forEach((route) => server.route(route));

  await server.register({
    plugin: HapiPino,
    options: {
      prettyPrint: env !== 'production',
    },
  });

  return server;
};

module.exports = { init };
