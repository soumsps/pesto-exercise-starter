import { accessorProperties } from './accessorProperties';

describe('Accessor Properties', () => {
  test('test for decimal', () => {
    const obj1 = accessorProperties({}, 'number');
    obj1.number = 5;
    expect(obj1.number).toBe('101');
  });

  test('test for decimal', () => {
    const obj2 = accessorProperties({}, 'number');
    obj2.number = 36;
    expect(obj2.number).toBe('100100');
  });

  test('test for decimal  with floating point', () => {
    const obj2 = accessorProperties({}, 'number');
    obj2.number = 36.1;
    expect(obj2.number).toBe('100100.00011001100110011001100110011001100110011001101');
  });
});
