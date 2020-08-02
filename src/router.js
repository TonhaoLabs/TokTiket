const mainRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Hello World!',
  },
];

module.exports = {
  routes: [...mainRoutes],
};
