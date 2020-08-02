const mainRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Hello World!',
  },
]

module.exports = {
  routes: [...mainRoutes],
}
