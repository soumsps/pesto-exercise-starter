function leastCommonMultiple(...args) {
  const largest = Math.max(args[0], args[1]);
  const smallest = Math.min(args[0], args[1]);
  let resultLCM = largest;

  while (true) {
    if (resultLCM % smallest === 0) {
      break;
    }
    resultLCM += largest;
  }
  return resultLCM;
}

export { leastCommonMultiple };
