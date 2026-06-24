// // Outer function
// function createGreeter(greeting) {
//   // Inner function
//   return function (name) {
//     console.log(greeting + ", " + name);
//   };
// }

// let sayHello = createGreeter("Hello");
// sayHello("Alice");

// Outer function
function counter() {
  let count = 0;
  // Inner function
  return function () {
    count++;
    return count;
  };
}

let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
