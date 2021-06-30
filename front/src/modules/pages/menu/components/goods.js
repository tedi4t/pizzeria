import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';

const GoodElement = ({ good }) => {
  
  return (
    <div className="good col-lg-6">
      <div className="good-img">
        <img src='sig_1.jpg'/>
      </div>
      <div className="good-info">
        <div className="row">
          <div className="col-10">
            <h2 className="good-name">
              { good.name }
            </h2>
          </div>
          <div className="col-2">
            <div className="good-price ml-auto">
              <h2>
                { good.price }
              </h2>
            </div>
          </div>
        </div>
        <h3 className="good-description">
          { good.description }
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
  const [url, setUrl] = useState('');
  const queryCondition = [
    {
      condition: () => (hallID !== 0 && typeID !== 0),
      url: `/good/hall/${hallID}/type/${typeID}`,
    },
    {
      condition: () => (hallID === 0 && typeID !== 0),
      url: `/good/type/${typeID}`,
    },
    {
      condition: () => (hallID !== 0 && typeID === 0),
      url: `/good/hall/${hallID}`,
    },
    {
      condition: () => (hallID === 0 && typeID === 0),
      url: `/good/all`,
    },
  ]

  useEffect(() => {
    for (const obj of queryCondition) {
      if (obj.condition()) {
        setUrl(obj.url);
        break;
      }
    }
  }, [hallID, typeID]);

  const [{ response, isLoading, error }, doFetch] = useFetch(url);

  useEffect(() => {
    doFetch();
  }, [url])

  return (
    <div id = "goods">
      <div className="row">
        {
          response && response.map((good, key) => (
            <GoodElement good={good} key={key} />
          ))
        }
      </div>
    </div>
  )
}