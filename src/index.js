const Hapi = require('@hapi/hapi');
const Router = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  Router.routes.forEach((route) => server.route(route));

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
