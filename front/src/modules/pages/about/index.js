import React from 'react';
import Title from '../../components/title.js';
import Heading from './components/heading.js';
import Chefs from './components/chefs.js';
import Footer from '../../components/footer.js';

export default () => {
  

  return (
    <section id="about">
      <Title text="About Us"/>
      <Heading />
      <Chefs />
      <Footer />
    </section>
  )
}