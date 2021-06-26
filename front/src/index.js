import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './modules/routes.js'
import './styles/styles.js';
import TopBar from './modules/components/topBar.js';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);