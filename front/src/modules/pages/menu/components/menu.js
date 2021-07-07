import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Halls from './halls.js';
import GoodTypes from './goodTypes.js';
import Goods from './goods.js';

export default () => {
  const [hallID, setHallID] = useState(0);
  const [typeID, setTypeID] = useState(0);

  return (
    <section id="menu">
      <Container>
        <div className="row">
          <div className="col-lg-2">
            <Halls hallID={hallID} setHallID={setHallID}/>
          </div>
          <div className="col-lg-2">
            <GoodTypes typeID={typeID} setTypeID={setTypeID}/>
          </div>
          <div className="col-lg-8">
            <Goods hallID={hallID} typeID={typeID} />
          </div>
        </div>
      </Container>
    </section>
  )
}