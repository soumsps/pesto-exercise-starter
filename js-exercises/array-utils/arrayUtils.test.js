// Write your own test cases.
import { forEach, map, filter, reduce } from './arrayUtils';

describe('testing custom implementation of forEach', () => {
  it('square of items', () => {
    const result = [];
    forEach([2, 4, 6], (item) => result.push(item * item));
    expect(result).toStrictEqual([4, 16, 36]);
  });
  it('without thisArgs', () => {
    const result = [];
    forEach([-1, 5], (item, index) => result.push([item, index]));
    expect(result).toStrictEqual([[-1, 0], [5, 1]]);
  });
  it('with thisArgs', () => {
    const result = [];
    forEach([2, 3, 4], (item, index, thisArgs) => result.push([item, index, thisArgs]));
    expect(result).toStrictEqual([[2, 0, [2, 3, 4]], [3, 1, [2, 3, 4]], [4, 2, [2, 3, 4]]]);
  });
});


describe('testing custom implementation of map', () => {
  it('square of items', () => {
    const result = map([2, 4, 6], (item) => item * item);
    expect(result).toStrictEqual([4, 16, 36]);
  });
  it('without thisArgs', () => {
    const result = map([-1, 5], (item, index) => [item, index]);
    expect(result).toStrictEqual([[-1, 0], [5, 1]]);
  });
  it('with thisArgs', () => {
    const result = map([2, 3, 4], (item, index, thisArgs) => [item, index, thisArgs]);
    expect(result).toStrictEqual([[2, 0, [2, 3, 4]], [3, 1, [2, 3, 4]], [4, 2, [2, 3, 4]]]);
  });
});

describe('testing custom implementation of filter', () => {
  it('items greater than 2', () => {
    const result = filter([2, 4, 6], (item) => item > 2);
    expect(result).toStrictEqual([4, 6]);
  });
});

describe('testing custom implementation of reduce', () => {
  it('all items sum', () => {
    const result = reduce([2, 4, 6], (accumulator, item) => accumulator + item);
    expect(result).toBe(12);
  });
});
