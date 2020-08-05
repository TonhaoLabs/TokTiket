const Hapi = require('@hapi/hapi');
const HapiPino = require('hapi-pino');
const Router = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  Router.routes.forEach((route) => server.route(route));

  await server.register({
    plugin: HapiPino,
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production',
    },
  });

  try {
    await server.start();
  } catch (err) {
    console.error({ err }, 'Error Starting');
  }

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
