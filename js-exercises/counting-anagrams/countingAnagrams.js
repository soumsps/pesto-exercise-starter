const frequencyMapOf = words => {
  const frequencyMap = new Map();
  words.map(word => {
    if (frequencyMap.has(word)) {
      frequencyMap.set(word, frequencyMap.get(word) + 1);
    } else {
      frequencyMap.set(word, 1);
    }
  });
  return Array.from(frequencyMap);
};

const normalizeWords = words => {
  return words.map(word => {
    return word
      .split('')
      .sort()
      .join('');
  });
};

const countingAnagrams = str => {
  if (typeof str !== 'string') throw new Error();

  const wordArray = str.split(' ');
  const normalizedWordsArray = normalizeWords(wordArray);
  const wordsFrequencyArray = frequencyMapOf(normalizedWordsArray);

  let anagramCount = 0;

  for (const [word, frequency] of wordsFrequencyArray) {
    if (word.length > 1 && frequency > 1) {
      anagramCount += 1;
    }
  }

  return anagramCount;
};

export { countingAnagrams };
