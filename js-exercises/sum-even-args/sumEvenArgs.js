const sumEvenArgs = (...args) => {
  const initialValueOfAccumulator = 0;
  return args.reduce((accumulator, number) => (
    number % 2 === 0 ? accumulator + number : accumulator), initialValueOfAccumulator);
};

export { sumEvenArgs };
