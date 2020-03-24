const allPromises = args => {
  if (args === undefined) {
    return Promise.resolve();
  }

  const resultArr = [];
  for (const [index, element] of args.entries()) {
    if (element instanceof Promise) {
      element.then(result => (resultArr[index] = result));
    } else {
      resultArr[index] = element;
    }
  }

  return new Promise(resolve => resolve(resultArr));
};

export { allPromises };
