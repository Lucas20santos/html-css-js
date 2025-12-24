/**
 * Working with Numbers and Arithmetic Operators
 * 
 * Parte-01: What Is the Number Type in JavaScript, and What Are the Different Types of Numbers Abailable ?
 * 
 * Here's a basic example showing you integers, floating point numbers, and negative numbers are all of type number:
 * 
 * */

const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

/**
 * Integer
 */

const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number

/**
 * Float
 */

const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number

/**
 * represent numbers that are beyond the maximum limit with Infinity
 */

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

/**
 * some mathematical operations don't result in a valid number.
 */

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
