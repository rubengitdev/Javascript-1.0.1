// ------------ pseudo code ------------
// create function called "bouncer" with array argument
// create variable with empty array to store the result of array
// loops through the array input
// check if each array input has falsy values. For example (false, null, 0, "", undefined, and NaN);
// condition 1: if the array input has falsy values, return false, otherwise return true

// the function should return a new array
// the bouncer function should not change the array passed in as an argument

function bouncer(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (Boolean(temp)) {
      result.push(temp);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
