import React from 'react';
import Row from '../row/row.component';
import BoardOverlay from '../board-overlay/board-overlay.component';

import './game-board.styles.css';

const GameBoard = ({ boardMatrix }) => {
  return (
    <div className="game-board">
      {boardMatrix.map((row, index) => (
        <Row key={index} rowData={row} />
      ))}
      <BoardOverlay />
    </div>
  );
};

export default GameBoard;
