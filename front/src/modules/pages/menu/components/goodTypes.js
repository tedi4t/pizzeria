import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch.js';

const TypeElement = ({ type, activeID }) => {
  console.log(type);
  const classList = `good-types-element ${type.id === activeID ? 'active' : ''}`;
  return (
    <h1 className={classList}>
      {type.name}
    </h1>
  )
}

export default () => {
  const [{ response, isLoading, error }, doFetch] = useFetch('/good/type/all');
  const [activeType, setActiveType] = useState(2);

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <div id = "good-types">
      <div className="menu-title">Menu</div>
      <div className="good-types-elements">
        {
          response && response.map((type, id) => (
            <TypeElement key = {id} type = {type} activeID = {activeType} />
          ))
        }
      </div>
    </div>
  )
}