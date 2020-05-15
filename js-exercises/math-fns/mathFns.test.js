import { sqrt, power, round } from './mathFns';

describe('Use Math functions', () => {
  test('should use the math functions to get correct values', () => {
    expect(sqrt(49)).toBe(7);
    expect(power(2, 4)).toBe(16);
    expect(round(7.4)).toBe(7);
  });
});
