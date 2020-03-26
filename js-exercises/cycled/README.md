## Requirements
- You **have** to use iterators or generators.

## Instructions

Create a class that is used to iterate over an array in a circular way;
i.e., restarts from the beginning after reaching the end.

### Example

```js
  const cycled = new Cycled([1, 2, 3]);
  cycled.current();
  //=> 1

  cycled.next();
  //=> 2

  cycled.next();
  //=> 3

  cycled.next();
  //=> 1

  cycled.previous();
  //=> 3
```