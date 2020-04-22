import React, { useContext, createContext, useState } from 'react';
import { initialState, initializeGame } from './initialState';

const width = window.innerWidth;
if (width < 500) {
  initialState.boardSize = [20, 23];
  initialState.delay = 300;
}

initializeGame();

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [status, setStatus] = useState(initialState.status);
  const [highScore, setHighScore] = useState(initialState.highScore);
  const [score, setScore] = useState(initialState.score);
  const [foodEaten, setFoodEaten] = useState(initialState.foodEaten);
  const [boardSize, setBoardSize] = useState(initialState.boardSize);
  const [borderData, setBorderData] = useState(initialState.borderData);
  const [boardMatrix, setBoardMatrix] = useState(initialState.boardMatrix);
  const [snakeData, setSnakeData] = useState(initialState.snakeData);
  const [snakeDirection, setSnakeDirection] = useState(initialState.snakeDirection);
  const [snakeFood, setSnakeFood] = useState(initialState.snakeFood);
  const [delay, setDelay] = useState(initialState.delay);
  const [snakeSpeed, setSnakeSpeed] = useState(initialState.snakeSpeed);

  const value = {
    status,
    setStatus,
    highScore,
    setHighScore,
    score,
    setScore,
    foodEaten,
    setFoodEaten,
    boardSize,
    setBoardSize,
    borderData,
    setBorderData,
    boardMatrix,
    setBoardMatrix,
    snakeData,
    setSnakeData,
    snakeDirection,
    setSnakeDirection,
    snakeFood,
    setSnakeFood,
    delay,
    setDelay,
    snakeSpeed,
    setSnakeSpeed,
  };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const getState = () => useContext(StateContext);
// useContext is equivalent to StateContext.Consumer.

export { StateContext, StateProvider, getState };
