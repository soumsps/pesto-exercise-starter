import { generateCellData, generateBorder, markBorder } from '../game-mechanics/game-board.utility';

const initialState = {
  score: 0,
  boardSize: [25, 25],
  borderData: [],
  boardMatrix: [],
  snakeData: {
    head: [4, 5],
    body: [
      [5, 5],
      [5, 5],
      [6, 5],
      [7, 5],
    ],
  },
  snakeFood: [10, 7],
};

initialState.boardMatrix = generateCellData(initialState.boardSize);
initialState.borderData = generateBorder(initialState.boardSize);
initialState.boardMatrix = markBorder(initialState.borderData, initialState.boardMatrix);

export { initialState };
