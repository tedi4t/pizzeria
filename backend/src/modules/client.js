'use strict';
const pool = require('../db/database.js');
const queries = require('../db/queries.json');

const findClient = async phone => {
  const queryFind = queries['Client.find'];
  const paramsFind = [phone];
  const foundClient = (await pool.query(queryFind, paramsFind)).rows[0];
  return foundClient;
}

const updateAddress = async (clientID, address) => {
  const queryUpdateAddress = queries['Client.update'];
  const paramsUpdateAddress = [clientID, address];
  return await pool.query(queryUpdateAddress, paramsUpdateAddress);
}

const addClient = async client => {
  const { name, surname, phone, address } = client;
  const queryAdd = queries['Client.add'];
  const paramsAdd = [name, surname, phone, address];
  return await pool.query(queryAdd, paramsAdd);
}

const getClientID = async client => {
  const { phone, address } = client;
  const foundClient = await findClient(phone);
  console.log(foundClient);
  const foundClientAddress = foundClient.address;
  if (address !== foundClientAddress) {
    await updateAddress(foundClient.id, address);
  }
  if (foundClient) return foundClient.id;

  const added = addClient(client);
  return added;
}

module.exports = {
  getClientID
}