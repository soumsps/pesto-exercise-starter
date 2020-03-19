import { freqSort } from './freqSort';

describe('Frequency Sort', () => {
  test('Test 1', () => {
    expect(freqSort(['a', 'z', 'z', 'z', 'b', 'b', 'z'])).toEqual(['z', 'b', 'a']);
  });

  test('Test 2', () => {
    expect(freqSort(['a', 'a', 'z', 'z', 'b', 'b'])).toEqual(['a', 'z', 'b']);
  });

  test('When input array is empty', () => {
    expect(freqSort([])).toEqual([]);
  });
});
