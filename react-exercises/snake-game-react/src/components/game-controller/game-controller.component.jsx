import React, { useEffect } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { useInterval } from '../custom-hooks/useInterval.hook';
import { getState } from '../../state-management/store';
import {
  updateSnakePosition,
  isSnakeDead,
  growSnake,
  isFoodEaten,
  generateSnakeFood,
} from '../../game-mechanics/game-board.utility';
import './game-controller.styles.css';

const GameController = () => {
  const {
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
  } = getState();
  const KeyCodes = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

  useEffect(() => {
    document.onkeydown = handleKeyDown;
  });

  useInterval(
    () => {
      if (isFoodEaten(snakeData, snakeFood)) {
        const obj = generateSnakeFood(boardSize, borderData, snakeData, snakeFood, boardMatrix);
        setSnakeData(growSnake(snakeData, snakeDirection));
        setSnakeFood(obj.snakeFood);
        setBoardMatrix(obj.boardMatrix);
        setScore(score + snakeSpeed);
        setFoodEaten(foodEaten + 1);
        setHighScore(score > highScore ? score : highScore);
        setSnakeSpeed(snakeSpeed < 80 ? snakeSpeed + 5 : snakeSpeed);

        return;
      }

      if (isSnakeDead(snakeData, borderData)) {
        setStatus('game-over');
      } else {
        const obj2 = updateSnakePosition(snakeData, boardMatrix, snakeDirection);
        setSnakeData(obj2.snakeData);
        setBoardMatrix(obj2.boardMatrix);
      }
    },
    status === 'playing' ? delay - snakeSpeed : null
  );

  const onLeftButtonPress = () => {
    if (snakeDirection === 'right') {
      return;
    }
    setSnakeDirection('left');
  };
  const onUpButtonPress = () => {
    if (snakeDirection === 'down') {
      return;
    }
    setSnakeDirection('up');
  };

  const onDownButtonPress = () => {
    if (snakeDirection === 'up') {
      return;
    }
    setSnakeDirection('down');
  };

  const onRightButtonPress = () => {
    if (snakeDirection === 'left') {
      return;
    }
    setSnakeDirection('right');
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KeyCodes.LEFT:
        onLeftButtonPress();
        break;
      case KeyCodes.UP:
        onUpButtonPress();
        break;
      case KeyCodes.RIGHT:
        onRightButtonPress();
        break;
      case KeyCodes.DOWN:
        onDownButtonPress();
        break;
      default:
    }
  };

  return (
    <div className="mobile-controls">
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onLeftButtonPress}>
        <i className="fas fa-arrow-left"></i>
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onUpButtonPress}>
        <i className="fas fa-arrow-up"></i>
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onDownButtonPress}>
        <i className="fas fa-arrow-down"></i>
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onRightButtonPress}>
        <i className="fas fa-arrow-right"></i>
      </CustomButton>
    </div>
  );
};

export default GameController;
