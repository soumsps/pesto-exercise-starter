import { arrayCubeRootToJson } from './arrayCubeRootToJson';

describe('arrayCubeRootToJson', () => {
  it('find cube root of every element of array and return it as A json', () => {
    expect(arrayCubeRootToJson([27, 64, 125])).toMatchObject({ '27': 3, '64': 4, '125': 5 });
    expect(arrayCubeRootToJson(['27', '64', '125', 1])).toMatchObject({ '27': 3, '64': 4, '125': 5, '1': 1 });
    expect(arrayCubeRootToJson([-1, 1, Infinity, 64, -64])).toMatchObject({ '-1': -1, '1': 1, 'Infinity': Infinity, '64': 4, '-64': -4 });
  });

  it('throw cases', () => {
    expect(() => { arrayCubeRootToJson({}) }).toThrow();
    expect(() => { arrayCubeRootToJson(true) }).toThrow();
    expect(() => { arrayCubeRootToJson([null, false]) }).toThrow();
    expect(() => { arrayCubeRootToJson(false) }).toThrow();
    expect(() => { arrayCubeRootToJson(undefined) }).toThrow();
    expect(() => { arrayCubeRootToJson([1, 2, 4, 'abc']) }).toThrow();
    expect(() => { arrayCubeRootToJson([1, 2.12, 4.44, 'abc']) }).toThrow();
  });
});
