export const reducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case 'generateBorderData':
      return {
        ...state,
        borderData: payload,
      };
    case 'initializeGame':
      return {
        ...state,
        boardMatrix: payload,
      };

    default:
      return state;
  }
};
