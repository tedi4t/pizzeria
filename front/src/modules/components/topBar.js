import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { shoppingCartContext } from '../contexts/shoppingCart';

export default () => {
  const [shoppingCartState] = useContext(shoppingCartContext);
  const { innerWidth: width } = window;
  const lgBreakpoint = 992;
  const basicNavbarNavDisplay = width < lgBreakpoint ? 'none' : 'block';
  const scrollBreakpoint = 100;
  const [scrollTop, setScrollTop] = useState(0);
  const [price, setPrice] = useState(0);

  let basicNavbarNav;

  const handleToggleClick = e => {
    basicNavbarNav.classList.add('show');
  }

  const handleCloseClick = e => {
    basicNavbarNav.classList.remove('show');
  }

  const handleScroll = e => {
    const pageYOffset = window.pageYOffset;
    if (pageYOffset)  setScrollTop(window.pageYOffset);
  }

  document.addEventListener('DOMContentLoaded', () => {
    basicNavbarNav = document.getElementById('basic-navbar-nav');
    basicNavbarNav.classList.remove('show');
    basicNavbarNav.style.display = 'block';
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (scrollTop > scrollBreakpoint) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, [scrollTop]);

  useEffect(() => {
    let priceCounting = shoppingCartState
      .reduce((acc, element) => acc + element.price * element.quantity, 0);
    setPrice(priceCounting);
  }, [shoppingCartState]);

  return (
    <Navbar expand="lg" fixed="top" expanded id="navbar">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          <h2>
            The Venue
          </h2>
          <h3>
            Restaurant
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar-button" onClick={handleToggleClick}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{ display: basicNavbarNavDisplay }}>
          <div className="close-btn d-block d-lg-none" onClick={handleCloseClick}>X</div>
          <Nav className="ml-auto mr-auto">
            <Link to="/" className="navbar-link nav-link">home</Link>
            <Link to="#link" className="navbar-link nav-link">about us</Link>
            <Link to="/menu" className="navbar-link nav-link">menu</Link>
            <Link to="#link" className="navbar-link nav-link">delivery</Link>
            <Link to="#link" className="navbar-link nav-link">contact</Link>
          </Nav>
        </Navbar.Collapse>
        <div 
          className="reservations ml-auto"
          style={{ display: (price === 0) ? 'block' : 'none' }}  
        >
          Reservations: +34 586 778 8892
        </div>
        <Link
          to = "/shoppingCart"
          className="shopping-cart"
          style={{ display: (price > 0) ? 'flex' : 'none' }}  
        >
          <div className="shopping-cart-text">Корзина: { price } ₴</div>
        </Link>
      </Container>
    </Navbar>
  )
}