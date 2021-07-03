import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { shoppingCartContext } from '../../../contexts/shoppingCart.js';
import useFetch from '../../../hooks/useFetch.js'
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

export default () => {
  const [{ response, isLoading, error }, doFetch] = useFetch('/order/create');
  const [cookies, setCookie, removeCookie] = useCookies(['shoppingCart']);
  const [shoppingCartState] = useContext(shoppingCartContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    const data = {
      client: {
        name, 
        surname,
        phone,
        address,
      },
      order: shoppingCartState,
      hallID: 1
    };
    const params = {
      method: 'POST',
      body: JSON.stringify(data)
    }
    doFetch(params);
  }

  if (response) {
    removeCookie('shoppingCart');
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div id="order-form">
      <Container>
        <h3 className="order-form-header">
          Деталі замовлення
        </h3>
        <form onSubmit={handleSubmitForm}>
          <div className="row">
            <div className="col-md-6">
              <input 
                className = "form-group form-control form-control-lg"
                placeholder = "Name"
                type = "text"
                value = {name}
                onChange = {e => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input 
                className = "form-group form-control form-control-lg"
                placeholder = "Surname"
                type = "text"
                value = {surname}
                onChange = {e => setSurname(e.target.value)}
              />
            </div>
          </div>
          <input 
            className = "form-group form-control form-control-lg"
            placeholder = "Phone"
            type = "text"
            value = {phone}
            onChange = {e => setPhone(e.target.value)}
          />
          <input 
            className = "form-group form-control form-control-lg"
            placeholder = "Address"
            type = "text"
            value = {address}
            onChange = {e => setAddress(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            замовити
          </button>
        </form>
      </Container>
    </div>
  )
}