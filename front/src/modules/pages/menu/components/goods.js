import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { shoppingCartContext } from '../../../contexts/shoppingCart';
import { useCookies } from 'react-cookie';

const GoodElement = ({ good }) => {
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const [cookies, setCookie] = useCookies(['shoppingCart']);

  const handleOrderBtn = e => {
    setSelected(true);
    const payload = [{
      id: good.id, 
      name: good.name, 
      price: good.price, 
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
    setCookie('shoppingCart', JSON.stringify(shoppingCartState));
  }, [shoppingCartState]);

  return (
    <div className="good col-lg-6">
      <div className="good-img">
        <img src='sig_1.jpg'/>
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
        <div className="justify-center" style={{ display: selected ? 'none' : 'flex' }} onClick={handleOrderBtn}>
          <button className="good-btn">
            Order Now
          </button>
        </div>
        <div className="select-quantity-btns" style={{ display: selected ? 'flex' : 'none' }}>
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

export default ({ hallID, typeID }) => {
  const [url, setUrl] = useState('');
  const queryCondition = [
    {
      condition: () => (hallID !== 0 && typeID !== 0),
      url: `/good/hall/${hallID}/type/${typeID}`,
    },
    {
      condition: () => (hallID === 0 && typeID !== 0),
      url: `/good/type/${typeID}`,
    },
    {
      condition: () => (hallID !== 0 && typeID === 0),
      url: `/good/hall/${hallID}`,
    },
    {
      condition: () => (hallID === 0 && typeID === 0),
      url: `/good/all`,
    },
  ]

  useEffect(() => {
    for (const obj of queryCondition) {
      if (obj.condition()) {
        setUrl(obj.url);
        break;
      }
    }
  }, [hallID, typeID]);

  const [{ response, isLoading, error }, doFetch] = useFetch(url);

  useEffect(() => {
    doFetch();
  }, [url])

  return (
    <div id = "goods">
      <div className="row">
        {
          response && response.map((good, key) => (
            <GoodElement good={good} key={key} />
          ))
        }
      </div>
    </div>
  )
}