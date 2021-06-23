'use strict';

const express = require('express');
const router = express.Router();
const pool = require('../db/database');
const queries = require('../db/queries.json');

router.post('/create', async (req, res) => {
  const { clientID, hallID, order } = req.body;
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
    .then(res => res.status(200).json(true))
    .catch(res => res.status(500).json(false))
});

module.exports = router;