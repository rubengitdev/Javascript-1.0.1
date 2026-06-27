// ----- PSEUDO CODE -----
// DECLARE a function called steamrollArray that accept one argument(nested arrays)
// RECEIVE the argument
// CREATE a function called flatten(current)
// LOOP through element of current
//      IF its an array
//          continue loop (flatten(element))
//      ELSE
//          push the element to the result
// calls function flatten for input argument
// return the result

function steamrollArray(arr) {
  const result = [];

  function flatten(current) {
    for (const element of current) {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        result.push(element);
      }
    }
  }

  flatten(arr);
  return result;
}
