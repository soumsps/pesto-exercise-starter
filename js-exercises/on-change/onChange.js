const onChange = (objToWatch, onChangeFunction) => {
  const handler = {
    get(target, property, receiver) {
      onChangeFunction(); // Calling our function
      const value = Reflect.get(target, property, receiver);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }
      return value;
    },

    // set(target, property, value, receiver) {
    //   onChangeFunction();
    //   return Reflect.set(target, property, value, receiver);
    // },

    defineProperty(target, property, descriptor) {
      const value = Reflect.defineProperty(target, property, descriptor);
      if (typeof value === 'object') {
        return new Proxy(value, handler);
      }

      const oldDescriptor = Object.getOwnPropertyDescriptor(target, property);
      Reflect.defineProperty(target, property, {
        ...oldDescriptor,
        ...descriptor
      });

      onChangeFunction();
      return true;
    },

    deleteProperty(target, property) {
      onChangeFunction();
      return Reflect.deleteProperty(target, property);
    }
  };

  return new Proxy(objToWatch, handler);
};

export { onChange };
