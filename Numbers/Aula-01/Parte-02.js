/**
 * Working with Numbers and Arithmetic Operators
 * 
 * Parte-02: What Are the Different Arithmetic Operators in JavaScript ?
 * 
 *  JavaScript provides tools to perform basic arithmetic operations on numbers, 
 *  such as addition, subtraction, multiplication, and division. JavaScript also 
 *  includes operators for more complex arithmetic operations, such as remainder
 *  and exponentiation.
 * 
 * */

// Addition operation '+'

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30

// Subtraction operation '-'

const difference = 10 - 5;
console.log(difference); // 5

difference = 5 - 10;
console.log(difference); // -5

num1 = 10;
num2 = 5;
const result = num1 - num2;

console.log(result); // 5

// multiplication operator '*'

num1 = 10;
num2 = 5;
num3 = 15;

result1 = num1 * num2;
result2 = num2 * num1;
result3 = num2 * num1 * num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750

// division operator '/'

num1 = 10;
num2 = 5;
num3 = 15;

result1 = num1 / num2;
result2 = num2 / num1;
result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333

// try to divide by zero

result = 10 / 0; 

console.log(result); // Infinity

// remainder operator

num1 = 10;
num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1

// exponentiation operator

num1 = 2;
num2 = 3;

const exponent = num1 ** num2;
console.log(exponent); // 8
