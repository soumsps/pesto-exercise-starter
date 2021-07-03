function buildFrequencyMapOfArrays() {
  const frequencyOfArrayItems = new Map();

  return function (array) {
    for (const item of array) {
      const itemCount = frequencyOfArrayItems.get(item);
      if (itemCount === undefined) {
        frequencyOfArrayItems.set(item, 1);
      } else {
        frequencyOfArrayItems.set(item, itemCount + 1);
      }
    }

    return frequencyOfArrayItems;
  };
}

function diffArray(array1, array2) {
  const addItemsToFrequencyMapOf = buildFrequencyMapOfArrays();

  addItemsToFrequencyMapOf(array1);
  const frequencyMapOfBothArray = addItemsToFrequencyMapOf(array2);
  const combinedItem2DArray = Array.from(frequencyMapOfBothArray.entries());
  const diffrenceArray = combinedItem2DArray.filter((element) => element[1] === 1);

  return diffrenceArray.map((element) => element[0]);
}

export {
  diffArray,
};
