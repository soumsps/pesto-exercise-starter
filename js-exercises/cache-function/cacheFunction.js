function cacheFunction(cb) {
  const functionArgumentSet = new Set();
  return function (arg) {
    if (!functionArgumentSet.has(arg)) {
      functionArgumentSet.add(arg);
      return cb(arg);
    }
  };
}

export {
  cacheFunction,
};
