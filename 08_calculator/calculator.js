const add = function(...num) {
	sol = 0;
  for(let i = 0; i < num.length; i++){
    sol += num[i];
  }
  return sol
};
const subtract = function(num, num1) {
  return num - num1
};
const sum = function(num) {
	sol = 0;
  for(let i = 0; i < num.length; i++){
    sol += num[i];
  }
  return sol
};


const multiply = function(num) {
	sol = num[0];
  for(let i = 1; i < num.length; i++){
    sol *= num[i];
  }
  return sol
};

const power = function(num, power) {
	sol = num;

  for(i = 1; i < power; i++){
    sol = sol * num;
  }
  return sol
};

const factorial = function(fact) {
  sol = 1

  for(i = 1; i <= fact; i++){
    sol = sol * i;
  }

	return sol
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
