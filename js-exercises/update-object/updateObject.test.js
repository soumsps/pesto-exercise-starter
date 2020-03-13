import { updateObject } from './updateObject';

describe('updateObject', () => {
  test('should return new array', () => {
    const array = ['a', 'b', 'c'];
    const newArray = updateObject(1, '_', array);
    expect(newArray).not.toBe(array);
  });

  test('should return object of Array type', () => {
    const array = ['a', 'b', 'c'];
    const newArray = updateObject(1, '_', array);
    expect(Array.isArray(newArray)).toBe(true);
  });

  test('when replacement index is less than 0', () => {
    const array = ['a', 'b', 'c'];
    const newArray = updateObject(-1, '_', array);
    expect(newArray).toEqual(['a', 'b', '_']);
  });

  test('when replacement index is greater than or equal to length of passed array', () => {
    const array = ['a', 'b', 'c'];
    const newArray1 = updateObject(3, '_', array);
    expect(newArray1).toEqual(['a', 'b', '_']);

    const newArray2 = updateObject(4, '_', array);
    expect(newArray2).toEqual(['a', 'b', '_']);
  });

  test('should return new array with replacement at index 0', () => {
    const array = ['c', 'b'];
    const newArray = updateObject(0, 'a', array);
    expect(newArray).toEqual(['a', 'b']);
  });
});
