function aperture(...args) {
  const tupleSize = args[0];
  const array = [...args[1]];
  const tupleList = [];

  while (tupleSize <= array.length) {
    tupleList.push(array.slice(0, tupleSize));
    array.shift();
  }

  return tupleList;
}

export { aperture };
