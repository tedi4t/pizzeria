import React, { useContext, useEffect, useState } from 'react';
import { shoppingCartContext } from '../../../contexts/shoppingCart';

export default ({ good }) => {
  console.log(good);
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);

  const handleOrderBtn = e => {
    setSelected(true);
    const payload = [{
      id: good.id, 
      name: good.name, 
      price: good.price,
      photo: good.photo,
      description: good.description,
      quantity
    }]
    dispatch({ type: 'addGood', payload})
  }

  const handleAddClick = e => {
    setQuantity(quantity + 1);
    const payload = {
      id: good.id, 
      quantity: quantity + 1
    }
    dispatch({ type: 'updateQuantity', payload})
  }

  const handleRemoveClick = e => {
    if (quantity <= 1) {
      setSelected(false);
      const payload = {
        id: good.id,
      }
      dispatch({ type: 'removeGood', payload})
    } else {
      setQuantity(quantity - 1);
      const payload = {
        id: good.id, 
        quantity: quantity - 1
      }
      dispatch({ type: 'updateQuantity', payload})
    }
  }

  useEffect(() => {
    for (const element of shoppingCartState) {
      if (element.id === good.id) {
        setSelected(true);
        setQuantity(element.quantity);
      }
    }
  }, [])

  return (
    <div className="good col-lg-6">
      <div className="good-img">
        <img src={ good.photo }/>
      </div>
      <div className="good-info">
        <div className="row">
          <div className="col-10">
            <h2 className="good-name">
              { good.name }
            </h2>
          </div>
          <div className="col-2">
            <div className="good-price ml-auto">
              <h2>
                { good.price }
              </h2>
            </div>
          </div>
        </div>
        <h3 className="good-description">
          { good.description }
        </h3>
        <div className="btn-wrapper" style={{ display: selected ? 'none' : 'flex' }} onClick={handleOrderBtn}>
          <button className="good-btn">
            Order Now
          </button>
        </div>
        <div className="select-quantity-btns btn-wrapper" style={{ display: selected ? 'flex' : 'none' }}>
          <button className="remove-btn" onClick={handleRemoveClick}>
            -
          </button>
          <span id="quantity">{ quantity }</span>
          <button className="add-btn" onClick={handleAddClick}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}