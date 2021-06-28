import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default () => {
  const { innerWidth: width } = window;
  const lgBreakpoint = 992;
  const basicNavbarNavDisplay = width < lgBreakpoint ? 'none' : 'block';

  let basicNavbarNav;

  document.addEventListener('DOMContentLoaded', () => {
    basicNavbarNav = document.getElementById('basic-navbar-nav');
    basicNavbarNav.classList.remove('show');
    basicNavbarNav.style.display = 'block';
  });

  const handleToggleClick = e => {
    basicNavbarNav.classList.add('show');
  }

  const handleCloseClick = e => {
    basicNavbarNav.classList.remove('show');
  }

  return (
    <Navbar expand="lg" fixed="top" expanded>
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