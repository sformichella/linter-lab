const linter = require('./linter')

const myFunc = () => {
  const blarg = 'some stuff';
  return blarg;
}

console.log(
  linter(myFunc)
);