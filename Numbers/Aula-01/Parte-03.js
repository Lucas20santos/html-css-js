/**
 * Working with Numbers and Arithmetic Operators
 * 
 * Parte-03: What Happens When You Try to Do Calculations with Numbers and Strings ?
 * 
 * Use + with a number and a string
 * 
 * When you use + with a number and a string, JavaScript decides to treat them both as strings and joins them together. 
 * 
 * */

const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

// Type coercion is when a value from one data type is converted into another.

result = '10' + 5;

console.log(result); // 105
console.log(typeof result); // string

// Things get more interesting when you try to perform other arithmetic operations like subtraction, multiplication, or division with a string and number. In these cases, JavaScript tries to convert the string into a number before doing the math – another type coercion! Here's what happens:

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

// But what if the string doesn't look like a number? Let's see what happens in that case:

subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number

// What if you perform arithmetic operations with a boolean (true or false)?

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

// For null and undefined, JavaScript treats null as 0 and undefined as NaN in mathematical operations:

result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
