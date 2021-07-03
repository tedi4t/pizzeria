import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../../components/title';
import ShoppingCartItems from './components/shoppingCartItems.js';

export default () => {
  

  return (
    <section id = "shopping-cart">
      <Title text ="The Order" />
      <ShoppingCartItems />
    </section>
  )
}