const createCharacterFrequencyMap = arr => {
  const frequencyMap = new Map();
  arr.map(character => {
    if (frequencyMap.has(character)) {
      frequencyMap.set(character, frequencyMap.get(character) + 1);
    } else {
      frequencyMap.set(character, 1);
    }
  });

  return frequencyMap;
};

const generateResultArray = arr => arr.map(el => el[0]);
const toArray = Array.from;
const sortByValue = arr => arr.sort((el1, el2) => el2[1] - el1[1]);
const compose = (...fns) => initialVal => fns.reduceRight((val, func) => func(val), initialVal);

function freqSort(arrayOfCharacters) {
  return compose(
    generateResultArray,
    sortByValue,
    toArray,
    createCharacterFrequencyMap
  )(arrayOfCharacters);
}

export { freqSort };
