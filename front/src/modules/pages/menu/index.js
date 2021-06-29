import React, { Fragment } from 'react';
import Title from './components/title.js';
import Heading from './components/heading.js';
import Menu from './components/menu.js';

export default ({ location, match }) => {

  return (
    <Fragment>
      <Title />
      <Heading />
      <Menu />
    </Fragment>
  )
}