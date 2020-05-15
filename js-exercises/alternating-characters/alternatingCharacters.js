function getMinimumDeletion(string) {
  let previousCharacter = '';
  let deletionCount = 0;
  string.split('').map(character => {
    if (character === previousCharacter) {
      deletionCount += 1;
    }
    previousCharacter = character;
  });

  return deletionCount;
}

function alternatingCharacters(arr) {
  return arr.map(string => getMinimumDeletion(string));
}

export { alternatingCharacters };
