const generateCellData = (boardSize) => {
  const cellData = [];
  for (let i = 0; i < boardSize[0]; i++) {
    cellData[i] = [];
    for (let j = 0; j < boardSize[1]; j++) {
      cellData[i][j] = { type: 'cell', class: 'cell' };
    }
  }
  return cellData;
};

const generateBorder = (boardSize) => {
  const borderData = [];
  for (let i = 0; i < boardSize[0]; i++) {
    for (let j = 0; j < boardSize[1]; j++) {
      // don't mark corner cell as border for snake
      if (
        (i === 0 && (j === 0 || j === boardSize[1] - 1)) ||
        (i === boardSize[0] - 1 && (j === 0 || j === boardSize[1] - 1))
      ) {
        borderData.push([i, j, 'corner']);
        continue;
      }

      if (i === 0) {
        borderData.push([i, j, 'border-top']);
      }
      if (i === boardSize[0] - 1) {
        borderData.push([i, j, 'border-bottom']);
      }

      if (j === 0) {
        borderData.push([i, j, 'border-left']);
      }
      if (j === boardSize[1] - 1) {
        borderData.push([i, j, 'border-right']);
      }
    }
  }

  return borderData;
};

const markBorder = (borderData, [...boardMatrix]) => {
  //eslint-disable-next-line array-callback-return
  borderData.map(([i, j, classCSS]) => {
    boardMatrix[i][j].class += ` ${classCSS}`;
  });

  return boardMatrix;
};

const setFoodPosition = (snakeFood, [...boardMatrix]) => {
  //eslint-disable-next-line array-callback-return
  snakeFood.map(([i, j]) => {
    boardMatrix[i][j].type = `snake-food`;
  });

  return boardMatrix;
};

const setSnakePosition = (snakeData, [...boardMatrix]) => {
  let [i, j] = snakeData.head;
  boardMatrix[i][j].type = `snake-head`;

  // eslint-disable-next-line array-callback-return
  snakeData.body.map(([i, j]) => {
    boardMatrix[i][j].type = `snake-body`;
  });

  return boardMatrix;
};

const cleanOldSnakePosition = (snakeData, [...boardMatrix]) => {
  let [i, j] = snakeData.head;
  boardMatrix[i][j].type = `cell`;

  // eslint-disable-next-line array-callback-return
  snakeData.body.map(([i, j]) => {
    boardMatrix[i][j].type = `cell`;
  });

  return boardMatrix;
};

const newSnakePositionData = (oldSnakeData, snakeDirection) => {
  oldSnakeData.body.unshift([...oldSnakeData.head]);
  oldSnakeData.body.pop();

  if (snakeDirection === 'left') {
    oldSnakeData.head[1] -= 1;
  }
  if (snakeDirection === 'right') {
    oldSnakeData.head[1] += 1;
  }
  if (snakeDirection === 'up') {
    oldSnakeData.head[0] -= 1;
  }
  if (snakeDirection === 'down') {
    oldSnakeData.head[0] += 1;
  }

  return { ...oldSnakeData };
};

const updateSnakePosition = ({ ...state }) => {
  state.boardMatrix = cleanOldSnakePosition(state.snakeData, state.boardMatrix);
  const newSnakeData = newSnakePositionData(state.snakeData, state.snakeDirection);
  const newBoardMatrix = setSnakePosition(newSnakeData, state.boardMatrix);

  return { snakeData: newSnakeData, boardMatrix: newBoardMatrix };
};

const updateFoodPosition = (snakeData, [...cellData]) => {};

export {
  generateBorder,
  generateCellData,
  markBorder,
  updateFoodPosition,
  updateSnakePosition,
  setFoodPosition,
  setSnakePosition,
};
