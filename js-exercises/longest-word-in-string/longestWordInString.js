function longestWordInString(...args) {
  const sentence = args[0];
  const words = sentence.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

export { longestWordInString };
