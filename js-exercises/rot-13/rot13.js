
function rot13(...args) {
  const encodedMessage = args[0];
  let decodedMessage = '';
  const shiftFactor = 13;
  const minASCII = 'A'.charCodeAt(0);
  const maxASCII = 'Z'.charCodeAt(0);
  const regex = new RegExp('[A-Z]', 'i');

  for (let i = 0; i < encodedMessage.length; i += 1) {
    if (regex.test(encodedMessage[i])) {
      let decodedCharAscii = encodedMessage[i].charCodeAt() - shiftFactor;
      if (decodedCharAscii < minASCII) {
        decodedCharAscii = maxASCII - ((minASCII - 1) - decodedCharAscii);
      }
      decodedMessage += String.fromCharCode(decodedCharAscii);
    } else {
      decodedMessage += encodedMessage[i];
    }
  }
  return decodedMessage;
}

export {
  rot13,
};
