// ----- PSEUDO CODE  -----
// DECLARE a function called diffArray that takes 2 arrays as arguments
// RECEIVE array a
// RECEIVE array b
// FIND everything unique to a
// FIND everything unique to b
// COMBINE both results
// return the combined array

function diffArray(arrayA, arrayB) {
  const uniqueArrayA = arrayA.filter((element) => !arrayB.includes(element));
  const uniqueArrayB = arrayB.filter((element) => !arrayA.includes(element));

  return uniqueArrayA.concat(uniqueArrayB);
}
