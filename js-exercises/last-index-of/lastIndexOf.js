
function lastIndexOf(...args) {
  const searchItem = args[0];
  const itemsArray = args[1];
  let itemLastOccurrenceIndex = -1;

  for (const [index, item] of itemsArray.entries()) {
    if (searchItem === item) {
      itemLastOccurrenceIndex = index;
    }
  }

  return itemLastOccurrenceIndex;
}

export {
  lastIndexOf,
};
