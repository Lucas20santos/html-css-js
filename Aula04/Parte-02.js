/**
 * Working with String Formatting Methods
 * 
 * Parte-02: How Can You Trim Whitespace from a String ?
 *
 * built-in methods: trim(), trimStart() and trimEnd()
 *   */ 

/**
 * trim(): is the most commonly used way to remove 
 * whitespace from both the beginning and the end of a string.
 * 
 * Example:
 */

let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"

/**
 * 
 * trimStart() and trimEnd()
 * 
 * Example:
 * 
 */

let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "

console.log(greeting);  // "   Hello!   "
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
