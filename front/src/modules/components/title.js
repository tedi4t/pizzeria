import React from 'react';
import { Container } from 'react-bootstrap';

export default ({ text }) => {
  return (
    <section id="menu-title">
      <Container>
        <div className="title">
          <h2>The Venue</h2>
          <h3>{text}</h3>
        </div>
      </Container>
    </section>
  );
};
