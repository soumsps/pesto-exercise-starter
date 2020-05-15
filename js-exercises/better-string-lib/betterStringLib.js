const betterStringLib = {};

betterStringLib.reverse = function(str) {
  return Array.from(str.normalize('NFC'))
    .reverse()
    .join('');
};

betterStringLib.equal = function(str1, str2) {
  return str1.normalize('NFC') === str2.normalize('NFC');
};

export { betterStringLib };
