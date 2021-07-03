function adder() {
  let additionResult = null;

  function add(...nums) {
    return nums.reduce((accumulator, number) => accumulator + number, 0);
  }

  return function (bigNumber) {
    let sumString = '';
    let carry = 0;

    if (additionResult === null) {
      additionResult = bigNumber;
    } else {
      const bigNumStrLength = Math.max(additionResult.length, bigNumber.length) + 1;
      const num1DigitsArray = additionResult.trim().padStart(bigNumStrLength, '0').split('').reverse();
      const num2DigitsArray = bigNumber.trim().padStart(bigNumStrLength, '0').split('').reverse();

      num1DigitsArray.map((digitChar, index) => {
        const sumOfDigit = add(parseInt(digitChar, 10), parseInt(num2DigitsArray[index], 10), carry);
        sumString = (sumOfDigit % 10) + sumString;
        // eslint-disable-next-line radix
        carry = parseInt(sumOfDigit / 10);
      });
      additionResult = sumString;
    }

    return additionResult;
  };
}

function addBigIntegers(intString) {
  const bigIntegerArray = intString.split('\n');
  const add = adder();
  const additionResult = bigIntegerArray.map((number) => add(number)).pop();
  const removeInitialZero = additionResult.replace(/^0+/, '');

  return removeInitialZero;
}

export { addBigIntegers };
