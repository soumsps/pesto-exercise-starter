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
  const { state, dispatch } = getState();
  const KeyCodes = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

  useEffect(() => {
    document.onkeydown = handleKeyDown;
  });

  useInterval(
    () => {
      if (isFoodEaten(state)) {
        dispatch({
          type: 'grow-snake',
          payload: growSnake(state.snakeData, state.snakeDirection),
        });

        dispatch({
          type: 'add-new-food',
          payload: generateSnakeFood(state),
        });

        dispatch({
          type: 'set-score',
        });

        dispatch({
          type: 'set-highscore',
        });

        dispatch({
          type: 'increase-snake-speed',
          payload: { step: 5 },
        });

        return;
      }

      if (isSnakeDead(state)) {
        dispatch({
          type: 'game-over',
        });
      } else {
        dispatch({
          type: 'move-snake',
          payload: updateSnakePosition(state),
        });
      }
    },
    state.status === 'playing' ? state.delay - state.snakeSpeed : null
  );

  const onLeftButtonPress = () => {
    if (state.snakeDirection === 'right') {
      return;
    }
    dispatch({
      type: 'set-snake-direction',
      payload: 'left',
    });
  };
  const onUpButtonPress = () => {
    if (state.snakeDirection === 'down') {
      return;
    }
    dispatch({
      type: 'set-snake-direction',
      payload: 'up',
    });
  };

  const onDownButtonPress = () => {
    if (state.snakeDirection === 'up') {
      return;
    }
    dispatch({
      type: 'set-snake-direction',
      payload: 'down',
    });
  };

  const onRightButtonPress = () => {
    if (state.snakeDirection === 'left') {
      return;
    }
    dispatch({
      type: 'set-snake-direction',
      payload: 'right',
    });
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
