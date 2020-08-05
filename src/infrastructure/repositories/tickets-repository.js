const { connection } = require('../database');

const TABLE_NAME = 'ticket';

const findAll = () => connection(TABLE_NAME).select('*');

module.exports = {
  findAll,
};
