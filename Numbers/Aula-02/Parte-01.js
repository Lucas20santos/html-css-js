/**
 * Working with Operator Behavior ?
 * 
 * Parte 01: How Does Operator Precedente Work ?
 * 
 */

// take a look at the expression below:

const result = 2 + 3 * 4;

console.log(result); // 14

// You can use parentheses, (), to do this. Anything inside parentheses is evaluated first, no matter what. Let's make the 2 + 3 part of the previous example evaluate first:

result = (2 + 3) * 4;

console.log(result); // 20

// The division operator has more precedence than addition or subtraction too:

result = 2 + 6 / 3;

console.log(result); // 4

let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10

// The exponent operator is also right-to-left associative:

result = 2 ** 3 ** 2;

console.log(result); // 512



