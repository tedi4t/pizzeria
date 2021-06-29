import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

const GoodElement = () => {
  // const imageSrc = require('./menu.jpg');
  
  return (
    <div className="good col-lg-6">
      <div className="good-img">
        <img src='sig_1.jpg'/>
      </div>
      <div className="good-info">
        <div className="row">
          <div className="col-10">
            <h2 className="good-name">
              Pork Tenderloin marinated in Green Pepper
            </h2>
          </div>
          <div className="col-2">
            <div className="good-price ml-auto">
              <h2>
                20$
              </h2>
            </div>
          </div>
        </div>
        <h3 className="good-description">
          lorem ipsum dolor set emi.
        </h3>
        <div className="justify-center">
          <button className="good-btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ({ hallID, typeID }) => {
  const [{ response, isLoading, error }, doFetch] = useFetch(`/good/hall/${hallID}/type/${typeID}`);

  useEffect(() => {
    doFetch();
  }, [])

  console.log(response);

  return (
    <div id = "goods">
      <div className="row">
        <GoodElement />
        <GoodElement />
        <GoodElement />
        <GoodElement />
      </div>
    </div>
  )
}