import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch.js';

const HallElement = ({ hall, activeID }) => {
  console.log(hall.id, activeID);
  const classList = `hall-element ${hall.id === activeID ? 'active' : ''}`;
  return (
    <h1 className={classList}>
      { hall.name }
    </h1>
  )
}

export default () => {
  const [{ response, isLoading, error }, doFetch] = useFetch('/hall/all');
  const [activeHall, setActiveHall] = useState(1);

  useEffect(() => {
    doFetch()
  }, [])

  console.log(response);

  return (
    <div id = "halls">
      <div className="hall-title">
        The Venue
      </div>
      <div className="hall-subtitle">
        Hall
      </div>
      <div className="hall-elements">
        {
          response && response.map((hall, id) => (
            <HallElement key = {id} hall={hall} activeID={activeHall}/>
          ))
        }
      </div>
    </div>
  )
}