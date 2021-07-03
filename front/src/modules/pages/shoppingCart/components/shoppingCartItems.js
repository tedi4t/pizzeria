import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { shoppingCartContext } from '../../../contexts/shoppingCart.js';
import ShoppingCartItem from "./shoppingCartItem.js";
import Footer from "../../../components/footer.js";
import TotalPrice from "./totalPrice.js";
import { Redirect } from "react-router-dom";

export default () => {
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [price, setPrice] = useState(0);
  
  useEffect(() => {
    const priceCounting = shoppingCartState.reduce((acc, good) => {
      return acc + good.price * good.quantity
    }, 0);
    setPrice(priceCounting);
  }, [shoppingCartState]);

  if (shoppingCartState.length === 0) {
    return (
      <Redirect to="/menu" />
    )
  }

  return (
    <Fragment>
      <div id = "shopping-cart-items">
        <Container>
          <h3 className="shopping-cart-items-title">
            Замовлення
          </h3>
          {
            shoppingCartState.map((item, id) => (
              <ShoppingCartItem key={id} good={item} />
            ))
          }
          <TotalPrice price={price} />
        </Container>
      </div>
      <Footer />
    </Fragment>
  )
}