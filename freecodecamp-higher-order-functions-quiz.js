// const numbers = [1, 1, 1, 1, 1];
// let sum = 0;
// const forEachRes = numbers.forEach((num) => {
//   return (sum += num);
// });
// const mapRes = numbers.map((num) => {
//   return (sum += num);
// });

// console.log(forEachRes);
// console.log(mapRes);

// const result = [, undefined, "a", "b", { 20: 5 }].sort();
// console.log(result);

// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, num) => sum + num);
// console.log(total); // Output: 100

// let str = "iShow Speed    ";
// const result = str.toLowerCase().trim().replace(" ", "_");
// console.log(result);

// let numbers = [2, 4, 8, 10];
// numbers.forEach(function (number) {
//   return number % 2;
// });

// console.log(numbers);

// const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const filteredArray = originalArray.filter((item) => item.id > 1);
// filteredArray[0].id = 4;

// console.log(originalArray);

const words = ["apple", "banana", "pear", "kiwi"];
const shortWords = words.filter((word) => word.length <= 5);
console.log(shortWords);
