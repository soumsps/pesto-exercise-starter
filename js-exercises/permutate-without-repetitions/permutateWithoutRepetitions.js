/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(array, permutationSet = [], result = []) {
  if (!array.length) {
    result.push([...permutationSet]);
  }

  for (let i = 0; i < array.length; i++) {
    const newArray = array.filter((element, index) => index !== i);
    permutationSet.push(array[i]);
    permutateWithoutRepetitions(newArray, permutationSet, result);
    permutationSet.pop();
  }

  return result;
}

export { permutateWithoutRepetitions };
