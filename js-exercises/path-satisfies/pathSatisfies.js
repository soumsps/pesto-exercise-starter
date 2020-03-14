function getPathData(path, dataObj) {
  return dataObj[path];
}

function pathSatisfies(...args) {
  const condition = args[0];
  const paths = args[1];
  const dataObject = args[2];
  let pathResult = dataObject;

  // eslint-disable-next-line array-callback-return
  paths.map(path => {
    pathResult = getPathData(path, pathResult);
  });

  return condition(pathResult);
}

export { pathSatisfies };
