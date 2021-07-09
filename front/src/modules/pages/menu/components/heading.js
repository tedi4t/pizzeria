import React from 'react';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <section id="menu-heading">
      <Container>
        <h2>Something new</h2>
        <h3>Discover Our Menu</h3>
        <div className="row text">
          <div className="col-12 col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla.
          </div>
          <div className="col-12 col-lg-6">
            Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
            mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
            Suspendisse cursus faucibus finibus. Ut non justo eleifend,
            facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus
            luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla
            consequat fringilla.
          </div>
        </div>
      </Container>
    </section>
  );
};
