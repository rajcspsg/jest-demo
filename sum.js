function sum(a, b) {
  return a + b;
}


function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; ++i) {
    result = sum(a, result);
  }
  return result;
}

module.exports = { sum, multiply };
