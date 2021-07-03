import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Homepage from './pages/homepage/index.js';
import Menu from './pages/menu/index.js'
import ShoppingCart from './pages/shoppingCart/index.js';

export default () => {
  return (
    <Switch>
      <Route path = "/" component = {Homepage} exact/>
      <Route path = "/menu" component = {Menu}/>
      <Route path = "/shoppingCart" component = {ShoppingCart}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
}