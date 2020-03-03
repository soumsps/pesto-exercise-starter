function sumPrimes(num) {
  let res = 0;
  const isPrime = new Array(num + 1).fill(true);

  //  implementing seive of eratothenese
  for (let i = 2; i * i <= num; i += 1) {
    if (isPrime[i]) {
      for (let j = (i * i); j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= num; i += 1) {
    if (isPrime[i]) {
      res += i;
    }
  }

  return res;
}

export {
  sumPrimes,
};
