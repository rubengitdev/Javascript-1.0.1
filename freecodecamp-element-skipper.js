// ----- PSEUDO CODE -----
// Declare a function called dropElements(arr, func). This function will skips elements in an array until it finds an acceptable one based on a specific function
//      LOOP through array
//          IF func(currentElement)
//          RETURN remaining elements starting here
//      END LOOP
//      RETURN empty array

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (func(currentElement)) {
      return arr.slice(i);
    }
  }
  return [];
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
);
