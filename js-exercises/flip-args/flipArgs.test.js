// write your own test cases

import { flipArgs } from './flipArgs';

describe('running flipArgs tests', () => {
  test('flip the given arguments', () => {
    const flipped = flipArgs((x) => x);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });
});