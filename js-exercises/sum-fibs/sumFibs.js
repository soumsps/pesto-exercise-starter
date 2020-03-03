function sumFibs(num) {
  let result = 0;
  let a = 1;
  let b = 1;

  while (a < num) {
    if (a % 2 !== 0) {
      result += a;
    }

    const temp = b;
    b = a + b;
    a = temp;
  }
  return result;
}

export {
  sumFibs,
};
