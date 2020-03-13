import { bouncer } from './bouncer';

describe('bouncer', () => {
  it('should return an array', () => {
    const truthyArray = bouncer([false, 9]);
    expect(Array.isArray(truthyArray)).toBe(true);
  });

  it('should return empty array for passed empty array', () => {
    const truthyArray = bouncer([]);
    expect(truthyArray).toEqual([]);
  });

  it('should return empty array for passed array containing only falsy values', () => {
    const truthyArray = bouncer([false, null, 0, NaN, undefined, '']);
    expect(truthyArray).toEqual([]);
  });

  it('should return array containing one element i.e 9', () => {
    const truthyArray = bouncer([false, null, 0, 9]);
    expect(truthyArray).toEqual([9]);
  });
});
