import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch.js';

const HallElement = ({ hall, activeID, setHallID }) => {
  const classList = `hall-element ${hall.id === activeID ? 'active' : ''}`;
  return (
    <h1 className={classList} onClick={handleHallClick(hall.id, setHallID)}>
      {hall.name}
    </h1>
  );
};

const handleHallClick = (id, setHallID) => (e) => {
  setHallID(id);
};

export default ({ hallID, setHallID }) => {
  const [{ response, isLoading, error }, doFetch] = useFetch('/hall/all');

  useEffect(() => {
    doFetch();
  }, []);

  const halls = [
    {
      id: 0,
      name: 'Всі',
    },
    ...(response || []),
  ];

  return (
    <div id="halls">
      <div className="hall-title">The Venue</div>
      <div className="hall-subtitle">Hall</div>
      <div className="hall-elements">
        {halls &&
          halls.map((hall, id) => (
            <HallElement
              key={id}
              hall={hall}
              activeID={hallID}
              setHallID={setHallID}
            />
          ))}
      </div>
    </div>
  );
};
