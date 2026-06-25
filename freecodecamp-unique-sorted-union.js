// Declare a function called uniteUnique()
// pseudo code

// create an empty array called result to store the array input
// loop through each arguments array
//      condition 1: if value didn't exist in the result: add value to the result
// return result

function uniteUnique(...arr) {
  const result = [];

  for (const array of arr) {
    for (const value of array) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
