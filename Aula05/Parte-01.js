/**
 * Working with String Modification Methods
 * 
 * Parte 01 - How Can You Replece Parts of a String with Another ?
 * 
 * replace method in JavaAcript allows you to find a specified value(like a word or character)
 * in a string and replace it with another value.
 */

let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"

/**
 * The replace() method is case-sensitive, meaning that it will only find exact matches of the searchValue. For example:
 */

let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);  // "I enjoy working with JavaScript."

/**
 * By default, the replace() method will only replace the first occurrence of the searchValue
 */

let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."
