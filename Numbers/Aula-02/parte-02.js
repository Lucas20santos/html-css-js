/**
 * Working with Operator Behavior ?
 * 
 * Parte 02: How Do the Increment and Decrement Operator work ? 
 */

// Prefix (++x) increases the value of the variable first, then returns a new value. Postfix (x++) returns the current value of the variable first, then increases it:

let x = 5;

console.log(++x); // 6
console.log(x); // 6

// Now, let's take a look at an example using the postfix:

let y = 5;

console.log(y++); // 5
console.log(y); // 6

// The decrement operator does the same thing as increment, except it decreases the value by 1. Again, there are two forms: prefix (--x) decreases the value of the variable first, then returns the new value. And postfix (x--) returns the current value first, then decreases it:

x = 5;
console.log(--x); // 4
console.log(x); // 4

y = 5;
console.log(y--); // 5
console.log(y); // 4

// So, which should you use: prefix or postfix? In many cases, it doesn't matter which one you use. Both get the job done. However, if you're using the value immediately in an expression, the difference becomes important. Let's take a look at this example:

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)





