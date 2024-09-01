const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0)
    return 0;
	return array.reduce(add);
};

const multiply = function(array) {
  return array.reduce((total, element) => {return total * element});
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	total = 1;
  for (let i = a; i > 0; i--){
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
//add, subtract, get the sum, multiply, get the power, and find the factorial