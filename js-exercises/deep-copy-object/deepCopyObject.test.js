import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.subObj.key = 'new value';

    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
