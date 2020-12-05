const stripCode = require('./stripCode');
const Stack = require('./stack');


const linter = (code) => {
  const stack = new Stack;
  const strippedCode = stripCode(code);

  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const openers = ['(', '[', '{']

  strippedCode.forEach(bracket => {

    if (openers.includes(bracket)) stack.push(bracket)

    else {
      const closer = bracket;
      const opener = stack.pop();

      const pair = opener + closer;
      const correctPair = opener + pairs[opener];

      const isPairCorrect = pair === correctPair;

      if (!isPairCorrect) {
        if (opener) {
          throw new Error(`error: mising ${pairs[opener]}`)
        }
        throw new Error(`error: extra ${closer} or missing ${pairs[closer]}`)
      }
    }

  })

  if (stack.peek()) {
    throw new Error(`error: extra ${stack.peek()}`);
  }

  return true;
}

module.exports = {
  linter
};
