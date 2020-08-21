const pino = require('pino');

const logger = pino({
  prettyPrint: process.env.NODE_ENV !== 'production',
});

module.exports = {
  logger,
};
