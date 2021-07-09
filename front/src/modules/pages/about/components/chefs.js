import React from 'react';
import { Container } from 'react-bootstrap';
import chef1 from '../images/chef_1.jpg';
import chef2 from '../images/chef_2.jpg';
import chef3 from '../images/chef_3.jpg';
import chef4 from '../images/chef_4.jpg';

const ChefElement = ({ name, position, imgSrc }) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-end">
      <div className="chef">
        <img className="chef-img" src={imgSrc} />
        <div className="description">
          <div className="name">{name}</div>
          <div className="position">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const chefs = [
    {
      name: 'Maria Smith',
      position: 'Top Chef',
      imgSrc: chef1,
    },
    {
      name: 'William Jones',
      position: 'Sauce Chef',
      imgSrc: chef2,
    },
    {
      name: 'Julien Williams',
      position: 'Sushi Chef',
      imgSrc: chef3,
    },
    {
      name: 'Suzie James',
      position: 'Sauce Chef',
      imgSrc: chef4,
    },
  ];

  return (
    <div className="chefs">
      <Container>
        <div className="row">
          {chefs.map((chef, id) => (
            <ChefElement key={id} {...chef} />
          ))}
        </div>
      </Container>
    </div>
  );
};
