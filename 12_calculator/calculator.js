const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};

const power = function (base, exponent) {
  let product = 1;
  for (let i = 0; i < exponent; i++) {
    product *= base;
  }
  
  return product;
};

const factorial = function (number) {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  } 

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
