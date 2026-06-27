// ----- PSEUDO CODE -----
// DECLARE a function called getIndexToIns that accept an array and a number as arguments
// RECEIVE array and number
// SORT the array
// FIND the first element that is greater or equal to num
// IF one exists: return its index
//      OTHERWISE: return the array length

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex((element) => element >= num);
  if (index === -1) {
    return arr.length;
  }

  return index;
}
