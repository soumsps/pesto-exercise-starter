## Instructions

sleep-promise resolves a promise after a specified delay.

Usage

```js
(async () => {
  await sleep(2000);
  console.log("2 seconds later …");
})();

sleep(2000).then(function() {
  console.log("2 seconds later …");
});
```
