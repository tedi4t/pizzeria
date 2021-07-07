'use strict';
const { Pool } = require('pg');
const config = require('./config/database.js')

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT,
  PG_DATABASE, NODE_ENV, DATABASE_URL } = process.env;

const devConfig = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
const proConfig = DATABASE_URL;

const pool = new Pool({
  connectionString: NODE_ENV === 'production' ? devConfig : proConfig,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;