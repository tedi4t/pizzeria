'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const path = require('path');

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
  {
    route: '/hall',
    filename: 'hall.js',
  },
];

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors({ origin: '*' }));

routers.forEach(routerObj => {
  const router = require(`./routes/${routerObj.filename}`);
  app.use(`/api${routerObj.route}`, router);
})

// to return react files
const webpageRoutes = [
  '/', 
  '/about', 
  '/menu', 
  '/shoppingCart', 
  '/shoppingCart/order'
];
app.use(express.static(path.join(__dirname, '../../front/public')));
app.get(webpageRoutes, (req, res) => {
  res.sendFile(path.join(__dirname, '../../front/public', 'index.html'));
});

//  app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, '../../front/public', 'index.html'));
//  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});