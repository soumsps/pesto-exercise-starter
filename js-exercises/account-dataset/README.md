## This question has 5 sub questions. 
### Please see the test cases.

The `dataset.json` will be used in the solutions.

- **hundredThousandairs()**  
  Return an array with accounts from bankBalances that are
  greater than 100000 without using for or while loop

- **datasetWithRoundedDollar()** 

  **DO NOT MUTATE DATA.**

  Return a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
  ```js
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  ```
- **sumOfBankBalances()**  
Return the sum of all values held at `amount` for each bank object

- **sumOfInterests()**  
  From each of the following states:
    Wisconsin, 
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`

- **higherStateSums()**  
  Aggregate the sum of each state into one hash table
  Return the sum of all states with totals greater than 1,000,000
