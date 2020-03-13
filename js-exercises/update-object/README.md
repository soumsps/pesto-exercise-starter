## Instructions

Returns a new copy of the array with the element at the provided index
replaced with the given value.

```js
  update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
  update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
  update(-1, a, [b, c]) = [b, a]
  update(0, a, [b, c]) = [a, c]
  update(1, a, [b, c]) = [b, a]
```