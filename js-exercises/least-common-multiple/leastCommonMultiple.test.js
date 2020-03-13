import { leastCommonMultiple } from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  test('should return number type', () => {
    expect(typeof leastCommonMultiple(6, 21)).toBe('number');
  });

  test('should return 42', () => {
    expect(leastCommonMultiple(6, 21)).toBe(42);
  });

  test('should return 75', () => {
    expect(leastCommonMultiple(15, 25)).toBe(75);
  });
});
