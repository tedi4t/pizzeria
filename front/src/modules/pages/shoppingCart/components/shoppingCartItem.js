import React, { useRef, useEffect, useContext, useState } from 'react';
import { shoppingCartContext } from '../../../contexts/shoppingCart.js';
import { useCookies } from 'react-cookie';

export default ({ good }) => {
  const shoppingCartImg = useRef(null);
  const [cookies, setCookie] = useCookies(['shoppingCart']);
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const { name, price, quantity, description } = good;
  console.log(good);

  const handleAddClick = e => {
    const payload = {
      id: good.id, 
      quantity: quantity + 1
    }
    dispatch({ type: 'updateQuantity', payload})
  }

  const handleRemoveClick = e => {
    const payload = {
      id: good.id, 
      quantity: quantity - 1
    }
    if (quantity <= 1) {
      dispatch({ type: 'removeGood', payload})
    } else {
      dispatch({ type: 'updateQuantity', payload})
    }
  }

  useEffect(() => {
    setCookie('shoppingCart', JSON.stringify(shoppingCartState));
  }, [shoppingCartState]);

  return (
    <div className="shopping-cart-item row">
      <div className="col-lg-4">
        <div 
          className="shopping-cart-img" 
          style={{ backgroundImage: 'url(sig_1.jpg)' }} 
          ref={shoppingCartImg}
        />
      </div>
      <div className="col-lg-4">
        <div className="shopping-cart-desc">
          <h3>
            { name }
          </h3>
          <h4>
            { description }
          </h4>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="select-quantity-btns">
          <button className="remove-btn" onClick={handleRemoveClick}>
            -
          </button>
          <span id="quantity">{ quantity }</span>
          <button className="add-btn" onClick={handleAddClick}>
            +
          </button>
        </div>
      </div>
      <div className="col-lg-1">
        <div className="total-price">
          { price * quantity } ₴
        </div>
      </div>
    </div>
  )
}