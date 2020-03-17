function minima(n, arr) {
  const resultArr = new Array(n).fill(Number.MAX_VALUE);

  for (const num of arr) {
    for (let i = 0; i < resultArr.length; i += 1) {
      if (num < resultArr[i]) {
        resultArr.splice(i, 0, num);
        break;
      }
    }
  }

  return resultArr.slice(0, n);
}

export { minima };
