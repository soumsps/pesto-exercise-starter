const flipArgs = callback => (...args) => callback(args.reverse());

export {
  flipArgs,
};
