import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { getState } from '../../state-management/store';

import './board-overlay.styles.css';

const BoardOverlay = () => {
  const { state, dispatch } = getState();
  const [initialState] = useState(cloneDeep(state));

  const onClickGameStartButton = () => {
    dispatch({
      type: 'start-game',
    });
  };

  const onClickGameRestartButton = () => {
    dispatch({
      type: 'restart-game',
      payload: initialState,
    });
  };

  return (
    <>
      {state.status !== 'playing' ? (
        <div className="board-overlay">
          {state.status === 'not-started' ? (
            <div className="start-overlay-content">
              <div className="start-oc-text">Start Game</div>
              <CustomButton
                btnClass={'btn-start btn-circle'}
                onClickCallback={onClickGameStartButton}
              >
                START
              </CustomButton>
            </div>
          ) : (
            ''
          )}

          {state.status === 'game-over' ? (
            <div className="restart-overlay-content">
              <div className="restart-oc-text">Game Over!</div>

              <CustomButton
                btnClass={'btn-restart btn-circle'}
                onClickCallback={onClickGameRestartButton}
              >
                RESTART
              </CustomButton>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default BoardOverlay;
