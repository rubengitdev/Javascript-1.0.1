// ----- PSEUDO CODE -----
// DECLARE a function called smallestCommons that accepts an array of two numbers as argument
// RECEIVE the array of two numbers
// FIND the smallest number --> find()
// FIND the largest number --> find()
// GENERATE every number in between --> map()
// CHECKING possible answer
// IF a number is divisible by ALL numbers
//      return it
// OTHERWISE
//      Try the next number

function smallestCommons(num) {
  const min = Math.min(...num);
  const max = Math.max(...num);

  let result = max;

  while (true) {
    let works = true;

    for (let i = min; i <= max; i++) {
      if (result % i !== 0) {
        works = false;
        break;
      }
    }

    if (works) {
      return result;
    }

    result++;
  }
}

console.log(smallestCommons([1, 5]));
