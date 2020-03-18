import { objectInvert } from './objectInvert';

describe('objectInvert', () => {
  it('should return an object', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectInvert(obj);
    expect(Array.isArray(result)).toBe(false);
    expect(typeof result).toBe('object');
  });
  it('should return an object where the keys and values have been switched', () => {
    const obj = {
      x: 'hi',
      y: 'sup',
      z: 'yo',
    };
    const result = objectInvert(obj);
    expect(result).toEqual({ hi: 'x', sup: 'y', yo: 'z' });
  });
});
