class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty!';
    return this.stack.pop();
  }

  isEmpty() {
    return !this.stack.length;
  }
}


function balancedBraces(...args) {
  const bracesArray = args[0].match(/[{}()[\]]/g);
  const openingBracesOrder = new Stack();
  const bracesMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

  for (const brace of bracesArray) {
    if (bracesMap.has(brace)) {
      openingBracesOrder.push(brace);
    } else if (bracesMap.get(openingBracesOrder.pop()) !== brace) {
      return false;
    }
  }

  return openingBracesOrder.isEmpty();
}

export {
  balancedBraces,
};
