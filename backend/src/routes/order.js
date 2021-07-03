'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');
const clientModules = require('../modules/client.js');

router.post('/create', async (req, res) => {
  const { client, hallID, order } = req.body;
  const clientID = await clientModules.getClientID(client);
  const queryOrder = queries['Order.create'];
  const paramsOrder = [parseInt(clientID), parseInt(hallID)];
  const orderID = (await pool.query(queryOrder, paramsOrder)).rows[0].id;
  
  const addedPromises = [];
  for (const orderElement of order) {
    const { id: goodID, quantity } = orderElement;
    const queryElement = queries['Order.addElement'];
    const paramsElement = [orderID, goodID, quantity];
    const addPromise = pool.query(queryElement, paramsElement);
    addedPromises.push(addPromise);
  }

  Promise.all(addedPromises)
    .then(data => res.status(200).json(JSON.stringify([])))
    .catch(err => res.status(500).json(err))
});

router.get('/all', async (req, res) => {
  const queryAll = queries['Good.all'];
  const paramsAll = [];
  const got = (await pool.query(queryAll, paramsAll)).rows;
  res.status(200).json(JSON.stringify(got));
})

router.get('/hall/:hall_id', async (req, res) => {
  const { hall_id } = req.params;
  const queryAll = queries['Order.hallOrders'];
  const paramsAll = [hall_id];
  const got = (await pool.query(queryAll, paramsAll)).rows;
  res.status(200).json(JSON.stringify(got));
})

module.exports = router;