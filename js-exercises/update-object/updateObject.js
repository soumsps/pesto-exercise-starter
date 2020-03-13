function updateObject(...args) {
  let indexToReplace = args[0];
  const providedNewElement = args[1];
  const array = args[2];

  if (indexToReplace < 0 || indexToReplace >= array.length) {
    indexToReplace = array.length - 1;
  }
  return array.map((element, index) => (indexToReplace === index ? providedNewElement : element));
}

export { updateObject };
