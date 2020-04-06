import React from 'react';
import GameBoard from '../../components/game-board/game-board.component';
import GameController from '../../components/game-controller/game-controller.component';
import { getState } from '../../state-management/store';

import './homepage.styles.css';

const HomePage = () => {
  const { state } = getState();
  console.log(state);

  return (
    <div className=" wrapper">
      <header className="header">
        <h1 className="page-title">Snake Game</h1>
      </header>
      <div className="scoreboard">
        <div className="score-text">Score: {state.score}</div>
        <div className="score-text">High Score: {state.highScore}</div>
      </div>

      <GameBoard boardMatrix={state.boardMatrix} />
      <GameController />
      <div className="instruction-text">Tip: Use arrow buttons to control snake.</div>
    </div>
  );
};

export default HomePage;
