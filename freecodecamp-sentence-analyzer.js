// To begin, create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.
// function getVowelCount(sentence) {
//   return sentence.length;
// }
// console.log(getVowelCount("Apple are tasty fruits"));

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

// Create a getPunctuationCount function with a sentence parameter.
// Inside the function, create a loop to count the number of punctuation characters in the sentence that will be passed into
// the function when it is called. For our purposes, a punctuation character is any character that is not a space (" ") or a letter.
// Your getPunctuationCount function must return a number.

function getPunctuationCount(sentence) {
  const punctuations = [
    ".",
    ",",
    "!",
    "?",
    ";",
    ":",
    "'",
    '"',
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "-",
    "_",
    "/",
    "\\",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
    "=",
    "<",
    ">",
    "|",
    "~",
    "`",
  ];
  let count = 0;
  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

// Finally, count the number of words by creating a getWordCount function with a sentence parameter.
// The function should return the total number of words in the sentence passed in when it is called.
// When the sentence is "When are you gonna start learning to code?", the getWordCount function should return 8.
function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
