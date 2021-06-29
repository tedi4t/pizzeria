import React, { useState, useEffect, useCallback } from 'react';

export default (url) => {
  const baseUrl = 'http://localhost:5000'
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const doFetch = useCallback((optionsFetch = {}) => {
    setIsLoading(true);
    setOptions(optionsFetch);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    
    const totalOptions = {};
    Object.assign(totalOptions, defaultOptions, options);

    fetch(baseUrl + url, totalOptions)
      .then(response => {
        response.json().then(data => {
          setIsLoading(false);
          setResponse(JSON.parse(data));
          setError(null);
        })
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      })
  }, [options, isLoading]);

  return [{ response, isLoading, error }, doFetch];
}