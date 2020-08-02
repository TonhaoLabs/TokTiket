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

module.exports = {
  routes: [...mainRoutes],
};
