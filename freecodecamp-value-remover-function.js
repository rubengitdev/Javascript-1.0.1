// ----- PSEUDO CODE -----
// DECLARE a function called destroyer() that receives an array and one or more additional arguments
// RECEIVE the original array
// RECEIVE all values that should be removed
// Go through every element in the original array
//      IF the element should be removed: Throw it away
//          OTHERWISE: Keep it
// RETURN the new array

function destroyer(arr, ...valuesToRemove) {
  return arr.filter((element) => !valuesToRemove.includes(element));
}
