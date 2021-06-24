'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');

router.post('/add', async (req, res) => {
  const { typeID, name, description, weight, price, photo } = req.body;
  const queryAdd = queries['Good.create'];
  const paramsAdd = [typeID, name, description, weight, price, photo];
  const added = (await pool.query(queryAdd, paramsAdd)).rows[0].id;
  res.status(200).json(added);
});

module.exports = router;