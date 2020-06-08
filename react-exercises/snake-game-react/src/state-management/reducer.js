import { cloneDeep } from 'lodash';

export const reducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case 'start-game':
      return {
        ...state,
        status: 'playing',
      };
    case 'restart-game':
      let obj = cloneDeep(payload);
      return {
        ...obj,
        status: 'playing',
        highScore: state.highScore,
      };

    case 'move-snake':
      return {
        ...state,
        snakeData: payload.snakeData,
        boardMatrix: payload.boardMatrix,
      };
    case 'grow-snake':
      return {
        ...state,
        snakeData: payload,
      };

    case 'increase-snake-speed':
      return {
        ...state,
        snakeSpeed: state.snakeSpeed < 80 ? state.snakeSpeed + payload.step : state.snakeSpeed,
      };
    case 'add-new-food':
      return {
        ...state,
        snakeFood: payload.snakeFood,
        boardMatrix: payload.boardMatrix,
      };
    case 'game-over':
      return {
        ...state,
        status: 'game-over',
      };

    case 'set-snake-direction':
      return {
        ...state,
        snakeDirection: payload,
      };

    case 'set-score':
      return {
        ...state,
        score: state.score + state.snakeSpeed,
        foodEaten: state.foodEaten + 1,
      };

    case 'set-highscore':
      return {
        ...state,
        highScore: state.score > state.highScore ? state.score : state.highScore,
      };

    default:
      return state;
  }
};
