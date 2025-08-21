const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  if (arr[0] === undefined) return 0;
  else return arr.reduce((acc, ele) => (acc += ele));
};

const multiply = function (arr) {
  return arr.reduce((acc, ele) => (acc *= ele));
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  // if (x === 0) return 0;
  let sum = 1;
  for (let i = x; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
