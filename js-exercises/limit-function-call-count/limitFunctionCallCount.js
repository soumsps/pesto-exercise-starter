const limitFunctionCallCount = (cb, functionCallLimit) => {
  return (...args) => {
    if (functionCallLimit > 0) {
      functionCallLimit -= 1;
      return cb(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
