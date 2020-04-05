import React from 'react';
import Row from '../row/row.component';
import './game-board.styles.css';

const GameBoard = ({ boardMatrix }) => {
  return (
    <>
      <div className="game-board">
        {boardMatrix.map((row, index) => (
          <Row key={index} rowData={row} />
        ))}
        <div className="board-overlay"></div>
      </div>
    </>
  );
};

export default GameBoard;
