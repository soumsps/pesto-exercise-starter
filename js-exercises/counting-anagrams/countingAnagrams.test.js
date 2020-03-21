import { countingAnagrams } from './countingAnagrams';

describe('countingAnagrams', () => {
  it('should return valid number of anagrams', () => {
    expect(countingAnagrams('aa aa odg dog gdo')).toEqual(2);
    expect(countingAnagrams('a c b c run urn urn')).toEqual(1);
    expect(countingAnagrams('k k k k bar foo')).toEqual(0);
  });

  it('should throw error with invalid args', () => {
    expect(() => countingAnagrams()).toThrow();
  });
});
