function chunkArrayInGroups(array, chunkSize) {
  return array.reduce((acc, _, currentIndex) => {
    const chunkBreakpoint = currentIndex % chunkSize === 0;
    if (chunkBreakpoint) {
      const arrayChunk = array.slice(currentIndex, currentIndex + chunkSize);
      return acc.concat([arrayChunk]);
    }
    return acc;
  }, []);
}

export {
  chunkArrayInGroups,
};
