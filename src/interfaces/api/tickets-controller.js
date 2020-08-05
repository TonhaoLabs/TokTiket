const Boom = require('@hapi/boom');
const TicketsRepository = require('../../infrastructure/repositories/tickets-repository');

const getAllTickets = async (req) => {
  let tickets;
  try {
    tickets = await TicketsRepository.findAll();
  } catch (error) {
    req.log('error', error);
    return Boom.notFound('No Tickets were found');
  }

  const payload = { items: tickets };

  return payload;
};

module.exports = {
  getAllTickets,
};
