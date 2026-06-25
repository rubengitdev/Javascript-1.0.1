// ----- pseudo code -----
// declare function called sumAll that accept array of 2 numbers (this function should return the sum of n and m and all of the numbers in betweem)
// find the smallest number
// find the largest number
// declare totalNumber variable and assign 0
//      Loop from smallest to largest
//          add current number to total
//      end Loop
// return totalNumber

function sumAll(arrNumber) {
  const smallestNumber = Math.min(...arrNumber);
  const largestNumber = Math.max(...arrNumber);
  let totalNumber = 0;

  for (let i = smallestNumber; i <= largestNumber; i++) {
    totalNumber += i;
  }
  return totalNumber;
}

console.log(sumAll([4, 1]));
