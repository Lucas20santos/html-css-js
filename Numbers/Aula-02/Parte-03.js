/**
 * Working with Operator Behavior ?
 * 
 * Parte 03: What are Compound Assignment Operators in JavaScript, and How Do They Work?
 *  
 */

// Compound assignment operators allow you to perform a mathematical operation and reassign the result back to the variable in one line of code

let num = 5;
num = num + 2;

console.log(num); // 7

// You can write something like this:

num = 5;
num += 2;

console.log(num); // 7

// The addition assignment operator takes the current value of the variable, adds the specified number to it, and then assigns the result back to the variable:

let total = 10;
total += 5;

console.log(total); // 15

// As you might guess, there's a subtraction assignment operator denoted by -=.

let score = 20;
score -= 7;

console.log(score); // 13

// The multiplication assignment operator is represented by *=

let points = 5;
points *= 3;

console.log(points); // 15

// Lastly, there's a division assignment operator denoted by /=.

let balance = 100;
balance /= 4;

console.log(balance); // 25



