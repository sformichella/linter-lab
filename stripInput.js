const stripInput = func => {
  const brackets = /[(){}\[\]]/g;

  return String(func).match(brackets);
}

module.exports =  stripInput;