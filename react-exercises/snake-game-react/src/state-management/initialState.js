import {
  generateCellData,
  generateBorder,
  markBorder,
  setFoodPosition,
  setSnakePosition,
} from '../game-mechanics/game-board.utility';

// status can be either of these [not-started, playing, game-over]
// snakeDirection can be either of these [up, down, left, right]
const initialState = {
  status: 'not-started',
  highScore: 0,
  score: 0,
  boardSize: [25, 25],
  borderData: [],
  boardMatrix: [],
  snakeData: {
    head: [7, 5],
    body: [
      [6, 5],
      [5, 5],
      [4, 5],
      [3, 5],
    ],
  },
  snakeDirection: 'down',
  snakeFood: [[10, 7]],
  snakeSpeed: 1,
};

initialState.boardMatrix = generateCellData(initialState.boardSize);
initialState.borderData = generateBorder(initialState.boardSize);
initialState.boardMatrix = markBorder(initialState.borderData, initialState.boardMatrix);
initialState.boardMatrix = setFoodPosition(initialState.snakeFood, initialState.boardMatrix);
initialState.boardMatrix = setSnakePosition(initialState.snakeData, initialState.boardMatrix);

export { initialState };
