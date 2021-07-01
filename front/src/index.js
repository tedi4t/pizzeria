import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './styles/styles.js';
import Routes from './modules/routes.js'
import TopBar from './modules/components/topBar.js';
import { ShoppingCartProvider } from './modules/contexts/shoppingCart.js';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </ShoppingCartProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);