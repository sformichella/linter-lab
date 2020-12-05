const stripCode = code => {
  const brackets = /[(){}\[\]]/g;

  return String(code).match(brackets);
}

module.exports =  stripCode;