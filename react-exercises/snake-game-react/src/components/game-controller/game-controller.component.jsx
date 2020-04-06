import React, { useEffect } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { useInterval } from '../custom-hooks/useInterval.hook';
import { getState } from '../../state-management/store';
import { updateSnakePosition } from '../../game-mechanics/game-board.utility';
import './game-controller.styles.css';

const GameController = () => {
  const { state, dispatch } = getState();
  const KeyCodes = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
  const delay = 200;

  useEffect(() => {
    window.onkeydown = handleKeyDown;
  });

  useInterval(
    () => {
      console.log('hello');
      // console.log(updateSnakePosition(state));
      dispatch({
        type: 'move-snake',
        payload: updateSnakePosition(state),
      });
    },
    state.status === 'playing' ? delay - state.snakeSpeed : null
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
        &#x2B05;
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onUpButtonPress}>
        &#x2B06;
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onDownButtonPress}>
        &#x2B07;
      </CustomButton>
      <CustomButton btnClass={'btn-game-control'} onClickCallback={onRightButtonPress}>
        &#x27A1;
      </CustomButton>
    </div>
  );
};

export default GameController;
