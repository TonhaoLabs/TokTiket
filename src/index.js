const { init } = require('./server');

const {
  PORT = 3000,
  HOST = 'localhost',
  NODE_ENV = 'development',
} = process.env;

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

const startServer = async () => {
  const server = await init({ port: PORT, host: HOST, env: NODE_ENV });

  try {
    await server.start();
  } catch (err) {
    server.log('error', 'Error Starting');
  }

  server.log(`Server running on ${server.info.uri}`);
};

startServer();
