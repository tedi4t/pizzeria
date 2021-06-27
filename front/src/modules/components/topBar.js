import React, { Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export default () => {


  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          <h2>
            The Venue
          </h2>
          <h3>
            Restaurant
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="#home" className="navbar-link">home</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">about us</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">menu</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">delivery</Nav.Link>
            <Nav.Link href="#link" className="navbar-link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div class="reservations ml-auto">Reservations: +34 586 778 8892</div>
      </Container>
    </Navbar>
  )
}