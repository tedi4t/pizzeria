import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="order-btn-block">
      <Link to="/shoppingCart/order" className="order-btn">
        Замовити
      </Link>
    </div>
  );
};
