import {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
} from './accountDataset';

describe('accountDataset', () => {

  describe('hundredThousandairs', () => {
    it('should return an array with accounts from bankBalances that are greater than 100000', () => {
      expect(hundredThousandairs().length).toBe(93);
      expect(hundredThousandairs().every(account => (account.amount > 100000))).toBe(true);
    });
  });

  describe('datasetWithRoundedDollar', () => {
    it('should return an array of accounts with an added key `rounded`', () => {
      expect(datasetWithRoundedDollar().length)
        .toBe(100);
      expect(datasetWithRoundedDollar().every(account => Object.hasOwnProperty.call(account, 'rounded')))
        .toBe(true);
    });

    it('each accounts `rounded` value should be rounded to the nearest dollar', () => {
      expect(datasetWithRoundedDollar()[0].rounded)
        .toBe(822371);
      expect(datasetWithRoundedDollar()[7].rounded)
        .toBe(231272);
      expect(datasetWithRoundedDollar()[9].rounded)
        .toBe(683737);
      expect(datasetWithRoundedDollar()[10].rounded)
        .toBe(913216);
      expect(datasetWithRoundedDollar()[99].rounded)
        .toBe(196086);
    });
  });

  describe('sumOfBankBalances', () => {
    it('should return the sum of all amounts in bankBalances, rounded to the nearest cent', () => {
      expect(sumOfBankBalances()).toBe(55502603.02);
    });
  });

  describe.only('sumOfInterests', () => {
    it('should return the sum the 18.9% interest for all amounts in bankBalances, in the selected states, rounded to the nearest cent', () => {
      expect(sumOfInterests())
        .toBe(2504611.23);
    });
  });

  it('should return the sum of all amounts of every state, where the sum of amounts in the state is greater than 1,000,000', () => {
    expect(higherStateSums())
      .toBe(48629878.25);
  });
});
