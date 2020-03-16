const isNumberValid = num => {
  if (typeof num === 'number' || (typeof num === 'string' && !isNaN(Number(num)))) {
    return true;
  }

  return false;
};

const isArrayValid = arr => {
  if (!Array.isArray(arr)) {
    throw new Error(`Expected an Array of numbers but recieved: ${arr}`);
  }

  for (const num of arr) {
    if (!isNumberValid(num)) {
      throw new Error(`Expected an Number or number as string but recieved: ${num}`);
    }
  }

  return true;
};

const arrayCubeRootToJson = arr => {
  const numToCuberootMap = {};
  isArrayValid(arr);

  for (const num of arr) {
    numToCuberootMap[num] = Math.cbrt(Number(num));
  }

  return numToCuberootMap;
};

export { arrayCubeRootToJson };
