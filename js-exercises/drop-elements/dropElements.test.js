import { dropElements } from './dropElements';

describe('dropElements', () => {
  test('should return the correct output', () => {
    expect(dropElements([1, 2, 3, 4], (n) => {
      return n >= 3;
    })).toEqual([3, 4]);
    expect(dropElements([0, 1, 0, 1], (n) => {
      return n === 1;
    })).toEqual([1, 1]);
    expect(dropElements([1, 2, 3, 4], (n) => {
      return n > 5;
    })).toEqual([]);
    expect(dropElements([1, 2, 3, 7, 4], (n) => {
      return n > 3;
    })).toEqual([7, 4]);
    expect(dropElements([1, 2, 3, 9, 2], (n) => {
      return n > 2;
    })).toEqual([3, 9]);
  });
});
