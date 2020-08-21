const Ticket = require('../../domain/model/Ticket');
const { connection } = require('../database');
const { logger } = require('../logging');

const TABLE_NAME = 'ticket';

const findAll = async () => {
  const items = await connection(TABLE_NAME).select('*');
  logger.info({ items }, 'Fetched items from database');

  return items.map(Ticket.fromDB);
};

module.exports = {
  findAll,
};
