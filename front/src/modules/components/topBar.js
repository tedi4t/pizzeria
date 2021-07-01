import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default () => {
  const { innerWidth: width } = window;
  const lgBreakpoint = 992;
  const basicNavbarNavDisplay = width < lgBreakpoint ? 'none' : 'block';
  const scrollBreakpoint = 100;
  const [scrollTop, setScrollTop] = useState(0);

  let basicNavbarNav;
  // let navbar;

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
            <Nav.Link href="/" className="navbar-link">home</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">about us</Nav.Link>
            <Nav.Link href="/menu" className="navbar-link">menu</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">delivery</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="reservations ml-auto d-none d-lg-block">Reservations: +34 586 778 8892</div>
      </Container>
    </Navbar>
  )
}