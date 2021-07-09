'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');

router.get('/all', async (req, res) => {
  const queryAll = queries['Hall.all'];
  const paramsAll = [];
  const got = (await pool.query(queryAll, paramsAll)).rows;
  res.status(200).json(JSON.stringify(got));
});

module.exports = router;
