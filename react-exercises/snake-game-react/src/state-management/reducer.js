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
      return {
        ...state,
        status: 'playing',
      };
    case 'move-snake':
      return {
        ...state,
        snakeData: payload.snakeData,
        boardMatrix: payload.boardMatrix,
      };
    case 'set-snake-direction':
      return {
        ...state,
        snakeDirection: payload,
      };

    default:
      return state;
  }
};
