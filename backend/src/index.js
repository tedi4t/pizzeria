'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const routers = [
  {
    route: '/order',
    filename: 'order.js',
  },
  {
    route: '/good',
    filename: 'good.js',
  },
];

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors({ origin: '*' }));

routers.forEach(routerObj => {
  const router = require(`./routes/${routerObj.filename}`);
  app.use(routerObj.route, router);
})

app.get('/', (req, res) => {
  res.json('Seccessfully connected to voting system');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});