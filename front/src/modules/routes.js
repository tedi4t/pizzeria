import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage/index.js';

export default () => {
  return (
    <Switch>
      <Route path = "/" component = {Homepage}/>
    </Switch>
  );
}