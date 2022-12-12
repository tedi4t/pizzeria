'use strict';
const { Pool } = require('pg');
require('dotenv').config();

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;

const connectionUrl = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`

const config = {
  connectionString: connectionUrl,
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(config);

module.exports = pool;