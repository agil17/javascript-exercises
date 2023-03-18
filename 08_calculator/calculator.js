const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(const num of arr) {
    sum = num + sum;
  }
  return sum;
};

const multiply = function(arr) {
  let total = 1;
  for(const num of arr) {
    total = total * num;
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let total = 1;
  for(let i = a; i > 0; i--) {
    total = total * i;
  }
  return total;
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
