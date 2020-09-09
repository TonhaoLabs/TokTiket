const Boom = require('@hapi/boom');
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

module.exports = {
  getAllTickets,
};
