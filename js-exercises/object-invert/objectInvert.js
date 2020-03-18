const toEntries = Object.entries;
const makeObjectFromEntries = Object.fromEntries;
const swapKeyValue = entries => entries.map(el => el.reverse());

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

function objectInvert(obj) {
  return compose(makeObjectFromEntries, swapKeyValue, toEntries)(obj);
}

export { objectInvert };
