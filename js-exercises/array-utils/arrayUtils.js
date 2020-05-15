function forEach(inputArray, callback) {
  for (let i = 0; i < inputArray.length; i += 1) {
    callback(inputArray[i], i, inputArray);
  }
}

function map(inputArray, callback) {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    outputArray.push(callback(inputArray[i], i, inputArray));
  }
  return outputArray;
}

function filter(inputArray, callback) {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (callback(inputArray[i], i, inputArray)) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

function reduce(inputArray, callback, initialValue) {
  let accumulator = (initialValue === undefined) ? 0 : initialValue;
  for (let i = 0; i < inputArray.length; i += 1) {
    accumulator = callback(accumulator, inputArray[i], i, inputArray);
  }
  return accumulator;
}

export {
  forEach,
  map,
  filter,
  reduce,
};
