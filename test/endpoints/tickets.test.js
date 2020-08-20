const test = require('ava');
const request = require('supertest');

const { init } = require('../../src/server');

test.before(async (t) => {
  t.context.server = await init({
    port: 3333,
    host: 'localhost',
    env: process.env.NODE_ENV,
  });

  await t.context.server.start();
});

test.after.always(async (t) => {
  await t.context.server.stop();
});

test('GET /tickets should return JSON, status 200 and have an items field', async (t) => {
  const response = await request(t.context.server.info.uri).get('/tickets');

  t.is(response.status, 200);
  t.regex(response.type, /json/);
});
