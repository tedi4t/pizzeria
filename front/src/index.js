import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './styles/styles.js';
import Routes from './modules/routes.js'
import TopBar from './modules/components/topBar.js';
import { ShoppingCartProvider } from './modules/contexts/shoppingCart.js';
import { CookiesProvider } from 'react-cookie';
import ShoppingCartChecker from './modules/components/shoppingCartChecker';

function App() {
  return (
    <CookiesProvider>
      <ShoppingCartProvider>
        <ShoppingCartChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </ShoppingCartChecker>
      </ShoppingCartProvider>
    </CookiesProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);