// pseudo code
// split the text into array of words and conver all char into lowercase
// create an empty array to store the transformed words
// Loop for each words in array
// get the first character on the first word and capitalize it
// get the rest of the word (starting from index 1)
// Combine:
// uppercase first character + remaining lowercase characters
// End For
// Join all words in the result array with spaces
// return the final string

function titleCase(str) {
  // convert the string input into array of string and assign it to copyStr variable
  const copyStr = str.split(" ");

  // loop through each array of strings (copyStr)
  for (let i = 0; i < copyStr.length; i++) {
    //store each string in the array into word variable
    const word = copyStr[i];

    // capitalize the first letter (string index 0) on each word
    const firstLetter = word.charAt(0).toUpperCase();
    // transform the rest of the letters into lowercase (string index start from 1)
    const restWord = word.slice(1).toLowerCase();

    // combine firstletter with the rest of the letters and re-assign it to copyStr
    copyStr[i] = firstLetter + restWord;
  }

  // create and return a new string, concatenated with specified separator: " "
  return copyStr.join(" ");
}

console.log(titleCase("hello motherfucker!"));
