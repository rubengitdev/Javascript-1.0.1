// Objective: fulfill the user stories below and get all the tests to pass to complete the lab

// Step by Step
// 1. Loop through string
// 2. Check each letter's ASCII code
// 3. If difference is found --> return missing letter
// 4. If all letters are present in the input, return undefined

function fearNotLetter(str) {
  // sort the input alphabetically and assign the input in a new variable "sortedStr";
  for (let i = 0; i < str.length - 1; i++) {
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    if (nextCode - currentCode !== 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("JavaScript"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
