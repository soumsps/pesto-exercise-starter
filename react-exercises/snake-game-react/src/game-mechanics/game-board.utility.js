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

const markBorder = (borderData, [...cellData]) => {
  //eslint-disable-next-line array-callback-return
  borderData.map(([i, j, classCSS]) => {
    cellData[i][j].class += ` ${classCSS}`;
  });

  return cellData;
};

export { generateBorder, generateCellData, markBorder };
