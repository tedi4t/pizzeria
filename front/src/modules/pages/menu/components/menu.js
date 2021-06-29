import React from 'react';
import { Container } from 'react-bootstrap';
import Halls from './halls.js';
import GoodTypes from './goodTypes.js';
import Goods from './goods.js';

export default ({ location, match }) => {
  console.log({ location, match });

  return (
    <section id="menu">
      <Container>
        <div className="row">
          <div className="col-lg-3">
            <Halls />
          </div>
          <div className="col-lg-3">
            <GoodTypes />
          </div>
          <div className="col-lg-3">
            <Goods />
          </div>
        </div>
      </Container>
    </section>
  )
}