'use strict';
const { Pool } = require('pg');
require('dotenv').config();

const {
  PG_USER,
  PG_PASSWORD,
  PG_HOST,
  PG_PORT,
  PG_DATABASE,
  NODE_ENV,
  DATABASE_URL,
} = process.env;

const devConfig = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`;
const proConfig = DATABASE_URL;

const config = {
  connectionString: NODE_ENV === 'production' ? proConfig : devConfig,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

module.exports = pool;
