import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { getState } from '../../state-management/store';

import './board-overlay.styles.css';

const BoardOverlay = () => {
  const { status, setStatus } = getState();
  //const [initialState] = useState(cloneDeep(state));

  const onClickGameStartButton = () => {
    setStatus('playing');
  };

  const onClickGameRestartButton = () => {
    setStatus('playing');
  };

  return (
    <>
      {status !== 'playing' ? (
        <div className="board-overlay">
          {status === 'not-started' ? (
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

          {status === 'game-over' ? (
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
