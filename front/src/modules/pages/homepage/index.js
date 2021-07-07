import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from './images/carousel-1.jpg';
import carousel2 from './images/carousel-2.jpg';
import carousel3 from './images/carousel-3.jpg';

export default () => {
  return (
    <section id="homepage">
      <Carousel>
        <Carousel.Item interval={60000}>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>The Venue is</h2>
            <h3>An Extraordinery Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={60000}>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>The Venue is</h2>
            <h3>An Extraordinery Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={60000}>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>The Venue is</h2>
            <h3>An Extraordinery Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}