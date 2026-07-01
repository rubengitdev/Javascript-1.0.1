// const regex = /testregex/;
// const test = regex.test("e");
// console.log(test);

const regex = /javascript/g;
const str = "javascript is the best we love javascript";
const matched = str.match(regex);
const replaced = str.replace(regex, "JavaScript");
console.log(matched);
console.log(replaced);
