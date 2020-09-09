const Ticket = require('../../domain/model/Ticket');
const { connection } = require('../database');
const { logger } = require('../logging');

const TABLE_NAME = 'ticket';

const findAll = async () => {
  const items = await connection(TABLE_NAME).select('*');
  logger.info({ items }, 'Fetched items from database');

  return items.map(Ticket.fromDB);
};

const findById = async (id) => {
  const items = await connection(TABLE_NAME).select('*').where({ id });
  logger.info({ items }, 'Fetched items from database');

  return items.map(Ticket.fromDB);
};

const createOne = async (ticket) => {
  const ticketData = ticket.toDB();
  const result = await connection(TABLE_NAME).insert(
    ticketData,
    Object.keys(ticketData),
  );

  logger.info({ result }, 'Created item on the database');

  return result;
};

module.exports = {
  findAll,
  findById,
  createOne,
};
