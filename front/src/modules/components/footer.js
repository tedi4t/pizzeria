import React from 'react';
import { Container } from 'react-bootstrap';

const Address = ({ text }) => (
  <div className="footer-contact">
		<div className="footer-contact-title">Address:</div>
		<div className="footer-contact-text">
      { text }
    </div>
	</div>
)

export default () => {
  

  return (
    <footer className="footer">
      <Container>
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-logo">
              <div className="footer-logo-title">The Venue</div>
              <div className="footer-logo-subtitle">restaurant</div>
            </div>
            <div className="copyright">
              <p>Copyright © 2021 All rights reserved <br /> Tedi4t's react app </p> 
            </div>
          </div>
          <div className="col-lg-6">
            <p className="footer-main-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio.
            </p>
          </div>
          <div className="col-lg-3 pr-0">
            <Address text="481 Creekside Lane Avila CA 93424" />
            <Address text="+53 345 7953 32453" />
            <Address text="yourmail@gmail" />
          </div>
        </div>
      </Container>
    </footer>
  )
}