import React from 'react';
import GameBoard from '../../components/game-board/game-board.component';
import GameController from '../../components/game-controller/game-controller.component';
import { getState } from '../../state-management/store';

import './homepage.styles.css';

const HomePage = () => {
  const { score, foodEaten, highScore, boardMatrix } = getState();
  console.log(getState());

  return (
    <div className=" wrapper">
      <header className="header">
        <h1 className="page-title">Snake Game</h1>
      </header>
      <div className="scoreboard">
        <div className="score-text">Score: {score}</div>
        <div className="score-text">Food Eaten: {foodEaten}</div>
        <div className="score-text">High Score: {highScore}</div>
      </div>

      <GameBoard boardMatrix={boardMatrix} />
      <GameController />
      <div className="instruction-text">Tip: Use arrow buttons to control snake.</div>
    </div>
  );
};

export default HomePage;
