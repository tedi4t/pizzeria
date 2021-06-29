import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch.js';

const TypeElement = ({ type, activeID, setTypeID }) => {
  const classList = `good-types-element ${type.id === activeID ? 'active' : ''}`;
  return (
    <h1 className={classList} onClick={handleTypeClick(type.id, setTypeID)}>
      {type.name}
    </h1>
  )
}

const handleTypeClick = (id, setTypeID) => e => {
  setTypeID(id);
}

export default ({ typeID, setTypeID }) => {
  const [{ response, isLoading, error }, doFetch] = useFetch('/good/type/all');

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <div id = "good-types">
      <div className="menu-title">Menu</div>
      <div className="good-types-elements">
        {
          response && response.map((type, id) => (
            <TypeElement key = {id} type = {type} activeID = {typeID} setTypeID={setTypeID}/>
          ))
        }
      </div>
    </div>
  )
}