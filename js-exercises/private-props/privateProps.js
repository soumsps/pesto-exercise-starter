function privateProps(obj, isPrivate) {
  const handler = {
    set(target, property, value, receiver) {
      if (isPrivate(property)) {
        throw new TypeError(`Can't set property "_private"`);
      } else {
        Reflect.set(target, property, value, receiver);
      }
    },
    has(target, property) {
      return property in target && !isPrivate(property);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => !isPrivate(key));
    }
  };
  return new Proxy(obj, handler);
}

export { privateProps };
