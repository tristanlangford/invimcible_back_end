////Database setup.

const { Client } = require('pg');
require('dotenv').config();
// console.log(process.env.DB_NAME);

if (process.env.ENV === 'test') {
  console.log('TEST DATABASE');
  var client = new Client({
    database: process.env.DB_NAME_TEST,
  });
} else {
  var client = new Client({
    database: process.env.DB_NAME,
  });
}

client.connect();

// console.log(client);
module.exports = { client };