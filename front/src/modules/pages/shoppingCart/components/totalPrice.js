import React from 'react';

export default ({ price }) => {


  return (
    <div className="total-price-all-goods-block">
      <h3 className="total-price-all-goods">
        Загальна вартість: { price }
      </h3>
    </div>
  )
}