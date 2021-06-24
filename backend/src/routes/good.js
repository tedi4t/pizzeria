'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');

router.post('/create', async (req, res) => {
  const { typeID, name, description, weight, price, photo } = req.body;
  const queryCreate = queries['Good.create'];
  const paramsCreate = [typeID, name, description, weight, price, photo];
  const created = (await pool.query(queryCreate, paramsCreate)).rows[0].id;
  res.status(200).json(created);
});

module.exports = router;