function getMinimumDeletion(string) {
  let previousChar = "";
  let deletionCount = 0;
  string.split("").map(char => {
    if (char === previousChar) {
      deletionCount += 1;
    }
    previousChar = char;
  });

  return deletionCount;
}

function alternatingCharacters(arr) {
  return arr.map(string => getMinimumDeletion(string));
}

export { alternatingCharacters };
