import React from 'react';
import Title from '../../components/title';
import ShoppingCartItems from './components/shoppingCartItems.js';
import OrderForm from './components/orderForm.js'

export default ({ location, match }) => {
  const isOrder = location.pathname.split('/')[2] === 'order';

  return (
    <section id = "shopping-cart">
      <Title text ="The Order" />
      {
        !isOrder && (
          <ShoppingCartItems />
        )
      }
      {
        isOrder && (
          <OrderForm />
        )
      }
    </section>
  )
}