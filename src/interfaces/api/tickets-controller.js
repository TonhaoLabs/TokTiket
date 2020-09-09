const Boom = require('@hapi/boom');

const Ticket = require('../../domain/model/Ticket');
const TicketsRepository = require('../../infrastructure/repositories/tickets-repository');

const getAllTickets = async (req) => {
  let tickets;
  try {
    tickets = await TicketsRepository.findAll(req);
    if (!tickets.length) {
      return Boom.notFound('No Tickets were found');
    }
  } catch (error) {
    req.log('error', error);
    return Boom.internal('An error ocurred while talking to the database');
  }

  const payload = { items: tickets };

  return payload;
};

const createTicket = async (req) => {
  if (!('description' in req.payload)) {
    return Boom.badRequest('The payload must specify a "description" field.');
  }

  const ticket = new Ticket(req.payload);

  req.logger.info({ ticket }, 'Starting persistence');

  let resultRows;
  try {
    resultRows = await TicketsRepository.createOne(ticket);
  } catch (err) {
    req.logger.error({ err }, 'Error creating on database');

    return Boom.internal('Failed persisting the Ticket to the database');
  }

  let inserted;
  try {
    inserted = await TicketsRepository.findById(resultRows[0]);
  } catch (err) {
    req.logger.error({ err }, 'Error while querying the inserted data');

    return Boom.internal('Failed fetching data from database');
  }

  return inserted;
};

module.exports = {
  getAllTickets,
  createTicket,
};
