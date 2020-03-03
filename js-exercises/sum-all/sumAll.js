function sum(a, b) {
  let res = 0;
  for (let i = a; i <= b; i += 1) {
    res += i;
  }

  return res;
}

function sumAll(arr) {
  return sum(Math.min(...arr), Math.max(...arr));
}


export {
  sumAll,
};
