const stripInput = require('./stripInput');
const Stack = require('./stack');

const linter = (func) => {
  const stack = new Stack;
  const strippedFunc = stripInput(func);

  
}


const myFunc = () => {
  const blarg = 'some stuff';
  return blarg;
}
