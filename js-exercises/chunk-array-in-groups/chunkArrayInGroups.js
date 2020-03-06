function chunkArrayInGroups(array, chunkSize) {
  const chunkedArray = [];
  let chunkStartIndex = 0;

  while (true) {
    if (chunkStartIndex >= array.length) {
      break;
    }
    const newChunk = array.slice(chunkStartIndex, chunkStartIndex + chunkSize);
    chunkStartIndex += chunkSize;
    chunkedArray.push(newChunk);
  }
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
