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

  // Additional test cases

  it('returns a deep copy of given object with nestedObj', () => {
    const myObj = {
      subObj: {
        key: 'value',
        nestedObj: {
          key: 'value',
        },
      },
    };

    const yourObj = deepCopyObject(myObj);
    yourObj.subObj.nestedObj.key = 'new value';

    expect(yourObj.subObj.nestedObj.key).toEqual('new value');
    expect(myObj.subObj.nestedObj.key).toEqual('value');
  });

  it('returns a deep copy of given object with nested array', () => {
    const myObj = {
      subArr: [1, 2, 3],
    };

    const yourObj = deepCopyObject(myObj);
    yourObj.subArr[1] = 5;

    expect(yourObj.subArr[1]).toEqual(5);
    expect(myObj.subArr[1]).toEqual(2);
  });

  it('returns a deep copy of given Array with nested Objects', () => {
    const myObj = [{ key: 'value' }, [1, 2, 3]];

    const yourObj = deepCopyObject(myObj);
    yourObj[0].key = 'new value';

    expect(yourObj[0].key).toEqual('new value');
    expect(myObj[0].key).toEqual('value');
  });
});
