function isUpperCase(ascii) {
  return ascii >= 65 && ascii <= 90;
}

function isLowerCase(ascii) {
  return ascii >= 97 && ascii <= 122;
}

function shiftAlphabetBy(shiftAmount, letter) {
  const asciiCode = letter.charCodeAt(0);
  let shiftedAscii = null;

  if (isUpperCase(asciiCode)) {
    shiftedAscii = (asciiCode - 65 + shiftAmount) % 26;
    shiftedAscii += 65;
  }

  if (isLowerCase(asciiCode)) {
    shiftedAscii = (asciiCode - 97 + shiftAmount) % 26;
    shiftedAscii += 97;
  }

  return String.fromCharCode(shiftedAscii);
}

function alphabeticShift(input) {
  const charsArray = input.split('');
  const shiftAmount = 1;
  let shiftedChars = '';

  for (const char of charsArray) {
    shiftedChars += shiftAlphabetBy(shiftAmount, char);
  }

  return shiftedChars;
}

export { alphabeticShift };
