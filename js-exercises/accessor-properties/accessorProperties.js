function accessorProperties(object, property) {
  const keyName = `_${property}`;

  Object.defineProperty(object, property, {
    get() {
      return this[keyName].toString(2);
    },
    set(value) {
      this[keyName] = value;
    },
    enumerable: true,
    configurable: true
  });
  return object;
}

export { accessorProperties };
