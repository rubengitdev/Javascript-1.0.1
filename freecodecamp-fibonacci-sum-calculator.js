// ----- PSEUDO CODE -----

// DECLARE a function called subFibs that accepts a number as an argument. This function should return the sum of all odds fibonacci numbers
// DECLARE a variable called result and assign it with 0
// DECLARE a variable called prev and assign it with 0
// DECLARE a variable called current and assign it with 1
//      LOOP while current <= num
//          IF current is odd: ADD current to total
//          CALCULATE next fibonacci number
//          UPDATE prev
//          UPDATE current
//      END LOOP
// RETURN total

function sumFibs(num) {
  let result = 0;
  let prev = 0;
  let current = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return result;
}

console.log(sumFibs(1000));
