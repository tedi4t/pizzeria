import React, { createContext, useReducer } from 'react';
const initialState = []; // array of objects like this { id, name, price, quantity }

const reducer = (state, action) => {
  const actions = {
    addGood: () => {
      const result = [...state, ...action.payload];
      return result;
    },
    updateQuantity: () => {
      const { id, quantity } = action.payload;
      const newState = [];
      for (const element of state) {
        if (element.id === id) {
          newState.push({ ...element, quantity });
        } else {
          newState.push({ ...element });
        }
      }
      return newState;
    },
    removeGood: () => {
      const newState = [];
      const { id } = action.payload;
      for (const element of state) {
        if (element.id !== id) {
          newState.push(element);
        }
      }
      return newState;
    },
    clearState: () => [],
  };
  return actions[action.type]();
};

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <shoppingCartContext.Provider value={value}>
      {children}
    </shoppingCartContext.Provider>
  );
};
