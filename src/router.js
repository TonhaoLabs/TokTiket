const TicketsController = require('./interfaces/api/tickets-controller');

const mainRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (req) => {
      req.log('info', 'GET /asdasd');

      return 'Hello World!';
    },
  },
];

const ticketRoutes = [
  {
    method: 'GET',
    path: '/tickets',
    handler: TicketsController.getAllTickets,
  },
  {
    method: 'POST',
    path: '/tickets',
    handler: TicketsController.createTicket,
  },
];

module.exports = {
  routes: [...mainRoutes, ...ticketRoutes],
};
