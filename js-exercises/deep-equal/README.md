## Instructions

Write a method that checks for equality with descriptors and without descriptors.
Performs a deep comparison between two values to determine if they are equivalent.

```js
const obj = { a: 5 };

const obj2 = {};
Object.defineProperty(obj2, "a", { value: 5 });

deepEqual(obj, obj2); //=> true
deepEqual(obj, obj2, { matchDescriptors: true }); //=> false
```
