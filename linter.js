const stripInput = require('./stripInput');
const Stack = require('./stack');


const linter = (func) => {
  const stack = new Stack;
  const strippedFunc = stripInput(func);

  const openers = ['(', '[', '{'];
  const pairs = ['()', '[]', '{}'];

  let doesLintingPass = true;

  strippedFunc.forEach(bracket => {
    let opener = '';

    if (openers.includes(bracket)) stack.push(bracket)
    else {
      opener = stack.pop();
      const pair = opener + bracket;

      if (!pairs.includes(pair)) doesLintingPass = false;
    }
  })

  return doesLintingPass;
}

module.exports = {
  linter
};
