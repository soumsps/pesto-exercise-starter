import { privateProps } from './privateProps';

describe('privateProps', () => {
  let myProxy;
  beforeAll(() => {
    const privacyFilter = (prop) => {
      return prop.indexOf('_') === 0;
    };
    const myObj = {
      _private: 'secret',
      public: 'hello',
      getPrivate: function getPrivate() {
        return this._private; // eslint-disable-line no-underscore-dangle
      },
    };
    myProxy = privateProps(myObj, privacyFilter);
  });

  test('accessible from methods', () => {
    expect(myProxy.getPrivate()).toBe('secret');
  });

  test('not accessible from outside', () => {
    expect('_private' in myProxy).toBe(false);
    expect(Object.keys(myProxy)).toEqual(['public', 'getPrivate']);
  });

  test('throws TypeError when new value is set on private property', () => {
    expect(() => {
      myProxy._private = 'another value'; // eslint-disable-line no-underscore-dangle
    }).toThrowError(TypeError, /Can't set property "_private"/);
  });
});
