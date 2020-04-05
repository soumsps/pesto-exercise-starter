import React, { useEffect } from 'react';
import GameBoard from '../../components/game-board/game-board.component';
import { getState } from '../../state-management/store';
import { generateBorder, generateCellData } from '../../game-mechanics/game-board.utility';
import './homepage.styles.css';

const HomePage = () => {
  const { state, dispatch } = getState();
  console.log(state);

  // useEffect(() => {
  //   dispatch({
  //     type: 'generateBorderData',
  //     payload: generateBorder(state.boardSize),
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   dispatch({
  //     type: 'initializeGame',
  //     payload: generateCellData(state.boardSize, state.borderData),
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.borderData, state.boardSize]);

  return (
    <div className=" wrapper">
      <header className="header">
        <h1 className="page-title">Snake Game</h1>
      </header>
      <div className="score-text">Score: {state.score}</div>
      <GameBoard boardMatrix={state.boardMatrix} />
    </div>
  );
};

export default HomePage;
