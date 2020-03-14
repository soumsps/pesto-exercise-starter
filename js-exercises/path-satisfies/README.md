## Instructions


Returns `true` if the specified object property at given path satisfies the given predicate; `false` otherwise.

```js
  pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
```
