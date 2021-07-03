import React, { Fragment } from 'react';
import Title from '../../components/title';
import Heading from './components/heading.js';
import Menu from './components/menu.js';
import Footer from '../../components/footer.js'

export default ({ location, match }) => {

  return (
    <Fragment>
      <Title text="The Menu"/>
      <Heading />
      <Menu />
      <Footer />
    </Fragment>
  )
}