/**
 * Working with String Modification Methods
 * 
 * Parte 02 - How can You Repeat  a String x Number of Times ?
 * 
 * The repeat() method is a built-in function in JavaScript that allows you to repeat a string a specified number of times. Here is the basic syntax:
 * 
 */

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"

/**
 * If the count is not an integer (such as a decimal like 2.5), the repeat() method will round it down to the nearest integer.
 */

word = "Test";
console.log(word.repeat(2.5));  // "TestTest"

/**
 * If you pass 0 as the count, the repeat() method will return an empty string.
 */

word = "Test";
console.log(word.repeat(0));  // ""


