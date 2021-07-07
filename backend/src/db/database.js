'use strict';
const { Pool } = require('pg');

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT,
  PG_DATABASE, NODE_ENV, DATABASE_URL } = process.env;

const devConfig = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
const proConfig = DATABASE_URL;

const config = {
  connectionString: NODE_ENV === 'production' ? devConfig : proConfig,
  ssl: {
    rejectUnauthorized: false
  }
};

console.log(NODE_ENV);
console.log(config);

const pool = new Pool(config);

module.exports = pool;