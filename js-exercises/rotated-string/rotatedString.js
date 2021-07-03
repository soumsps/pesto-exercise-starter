const reArrangeRotatedString = (startLetter, stringToRearrange) => {
  const letters = [];
  let index = stringToRearrange.indexOf(startLetter);
  const { length } = stringToRearrange;

  while (letters.length !== length) {
    const currentIndex = index % length;
    letters.push(stringToRearrange[currentIndex]);
    index += 1;
  }

  return letters.join('');
};

const rotatedString = (stringGiven, stringRotated) => {
  if (stringGiven.length !== stringRotated.length || stringGiven === stringRotated) {
    return false;
  }

  const reArrangedString = reArrangeRotatedString(stringGiven[0], stringRotated);
  if (stringGiven !== reArrangedString) {
    return false;
  }
  return true;
};

export { rotatedString };
