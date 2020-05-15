
function duplicateLetters(...args) {
  const str = args[0];
  const alphaObj = {};
  let maxDuplicate = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (alphaObj[str[i]] === undefined) {
      alphaObj[str[i]] = 1;
    } else {
      alphaObj[str[i]] += 1;
    }

    if (maxDuplicate < alphaObj[str[i]]) {
      maxDuplicate = alphaObj[str[i]];
    }
  }
  return maxDuplicate > 1 ? maxDuplicate : false;
}

export {
  duplicateLetters,
};
