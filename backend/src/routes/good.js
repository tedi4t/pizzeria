'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');

router.post('/add', async (req, res) => {
  const { typeID, name, description, weight, price, photo } = req.body;
  const queryAdd = queries['Good.create'];
  const paramsAdd = [typeID, name, description, weight, price, photo];
  const added = (await pool.query(queryAdd, paramsAdd)).rows;
  res.status(200).json(added);
});

router.get('/hall/:hall_id', async (req, res) => {
  const { hall_id } = req.params;
  const queryAll = queries['Good.hallGoods'];
  const paramsAll = [hall_id];
  const got = (await pool.query(queryAll, paramsAll)).rows;
  res.status(200).json(JSON.stringify(got));
})

router.get('/all', async (req, res) => {
  const queryAll = queries['Good.all'];
  const paramsAll = [];
  const got = (await pool.query(queryAll, paramsAll)).rows;
  res.status(200).json(JSON.stringify(got));
})

module.exports = router;