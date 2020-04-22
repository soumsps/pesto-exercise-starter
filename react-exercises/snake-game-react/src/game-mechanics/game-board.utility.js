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
    boardMatrix[i][j].type = 'border';
  });

  return boardMatrix;
};

const setFoodPosition = (snakeFood, [...boardMatrix]) => {
  let [i, j] = snakeFood;
  boardMatrix[i][j].type = `snake-food`;

  return boardMatrix;
};

const generateSnakeFood = (boardSize, borderData, snakeData, snakeFood, boardMatrix) => {
  let isFoodValid = false;
  const obstacles = [...borderData, ...snakeData.body, snakeData.head, snakeFood];
  const randomFood = (row, col) => {
    const i = Math.floor(Math.random() * row);
    const j = Math.floor(Math.random() * col);
    return [i, j];
  };

  while (!isFoodValid) {
    let food = randomFood(boardSize[0], boardSize[1]);
    let matchFound = 0;
    for (let i = 0; i < obstacles.length; i++) {
      if (food[0] === obstacles[i][0] && food[1] === obstacles[i][1]) {
        matchFound += 1;
      }
    }

    if (matchFound === 0) {
      isFoodValid = true;
      return { snakeFood: food, boardMatrix: setFoodPosition(food, boardMatrix) };
    }
  }
};

const setSnakePosition = (snakeData, boardMatrix) => {
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

// const cleanOldSnakePosition = (boardSize, [...boardMatrix]) => {
//   for (let i = 0; i < boardSize[0]; i++) {
//     for (let j = 0; j < boardSize[1]; j++) {
//       if (boardMatrix[i][j].type === 'snake-head' || boardMatrix[i][j].type === 'snake-body') {
//         boardMatrix[i][j].type = `cell`;
//       }
//     }
//   }

//   return boardMatrix;
// };

const newSnakePositionData = (oldSnakeData, snakeDirection) => {
  const newSnakeData = { head: [...oldSnakeData.head], body: [] };

  newSnakeData.body = [oldSnakeData.head, ...oldSnakeData.body];
  newSnakeData.body.pop();

  if (snakeDirection === 'left') {
    newSnakeData.head[1] -= 1;
  }
  if (snakeDirection === 'right') {
    newSnakeData.head[1] += 1;
  }
  if (snakeDirection === 'up') {
    newSnakeData.head[0] -= 1;
  }
  if (snakeDirection === 'down') {
    newSnakeData.head[0] += 1;
  }

  return newSnakeData;
};

const updateSnakePosition = (snakeData, boardMatrix, snakeDirection) => {
  boardMatrix = cleanOldSnakePosition(snakeData, boardMatrix);
  const newSnakeData = newSnakePositionData(snakeData, snakeDirection);
  const newBoardMatrix = setSnakePosition(newSnakeData, boardMatrix);

  return { snakeData: newSnakeData, boardMatrix: newBoardMatrix };
};

const isSnakeDead = (snakeData, borderData) => {
  const snakeHead = snakeData.head;
  const obstacles = [...borderData, ...snakeData.body];

  for (let i = 0; i < obstacles.length; i++) {
    if (snakeHead[0] === obstacles[i][0] && snakeHead[1] === obstacles[i][1]) {
      return true;
    }
  }

  return false;
};

const growSnake = (oldSnakeData, snakeDirection) => {
  const newSnakeData = { head: [...oldSnakeData.head], body: [] };
  newSnakeData.body = [oldSnakeData.head, ...oldSnakeData.body];

  if (snakeDirection === 'left') {
    newSnakeData.head[1] -= 1;
  }
  if (snakeDirection === 'right') {
    newSnakeData.head[1] += 1;
  }
  if (snakeDirection === 'up') {
    newSnakeData.head[0] -= 1;
  }
  if (snakeDirection === 'down') {
    newSnakeData.head[0] += 1;
  }

  return newSnakeData;
};

const isFoodEaten = (snakeData, snakeFood) => {
  if (snakeData.head[0] === snakeFood[0] && snakeData.head[1] === snakeFood[1]) {
    return true;
  }
  return false;
};

export {
  generateBorder,
  generateCellData,
  markBorder,
  updateSnakePosition,
  setFoodPosition,
  setSnakePosition,
  isSnakeDead,
  growSnake,
  isFoodEaten,
  generateSnakeFood,
};
