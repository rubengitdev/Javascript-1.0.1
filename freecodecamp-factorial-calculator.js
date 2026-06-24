let num = 1;

function factorialCalculator(entry) {
  let result = 1;
  for (let i = 1; i <= entry; i++) {
    result = result * i;
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
console.log(factorialCalculator(5));
