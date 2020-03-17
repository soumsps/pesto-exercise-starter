// Start your implementation here
function getStringParts(string) {
  const numbersInString = string.match(/(\d+)/g);
  const partsObj = {};

  if (!numbersInString) {
    partsObj.string = string;
    partsObj.digits = '0';
  } else {
    const lastDigits = numbersInString.pop();
    const digitsLength = lastDigits.length;

    if (string.lastIndexOf(lastDigits) + digitsLength === string.length) {
      partsObj.string = string.substring(0, string.lastIndexOf(lastDigits));
      partsObj.digits = lastDigits;
    } else {
      partsObj.string = string;
      partsObj.digits = '0';
    }
  }

  return partsObj;
}

function digitIncrementor(incrementAmount, digits) {
  const digitsLength = digits.length;
  const padWith = '0';
  const incrementedDigits = (Number(digits) + incrementAmount).toString();

  return incrementedDigits.padStart(digitsLength, padWith);
}

function bizarreStringIncrementer(str) {
  const incrementAmount = 1;
  const { string, digits } = getStringParts(str);
  const incrementedDigits = digitIncrementor(incrementAmount, digits);

  return `${string}${incrementedDigits}`;
}

export { bizarreStringIncrementer };
