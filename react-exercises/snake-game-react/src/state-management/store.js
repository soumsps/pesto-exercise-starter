import React, { useContext, createContext, useReducer } from 'react';
import { initialState, initializeGame } from './initialState';
import { reducer } from './reducer';

initializeGame();
const height = window.innerHeight;
const width = window.innerWidth;
console.log('innerheight', height);
console.log('innerWidth', width);

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const getState = () => useContext(StateContext);
// useContext is equivalent to StateContext.Consumer.

export { StateContext, StateProvider, getState };
