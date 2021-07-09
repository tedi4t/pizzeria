import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { shoppingCartContext } from '../../../contexts/shoppingCart';
import { useCookies } from 'react-cookie';
import GoodElement from './good.js';

export default ({ hallID, typeID }) => {
  const [url, setUrl] = useState('');
  const [shoppingCartState, dispatch] = useContext(shoppingCartContext);
  const [cookies, setCookie] = useCookies(['shoppingCart']);

  const queryCondition = [
    {
      condition: () => hallID !== 0 && typeID !== 0,
      url: `/good/hall/${hallID}/type/${typeID}`,
    },
    {
      condition: () => hallID === 0 && typeID !== 0,
      url: `/good/type/${typeID}`,
    },
    {
      condition: () => hallID !== 0 && typeID === 0,
      url: `/good/hall/${hallID}`,
    },
    {
      condition: () => hallID === 0 && typeID === 0,
      url: `/good/all`,
    },
  ];

  useEffect(() => {
    setCookie('shoppingCart', JSON.stringify(shoppingCartState));
  }, [shoppingCartState]);

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
  }, [url]);

  return (
    <div id="goods">
      <div className="row">
        {response &&
          response.map((good, key) => <GoodElement good={good} key={key} />)}
      </div>
    </div>
  );
};
