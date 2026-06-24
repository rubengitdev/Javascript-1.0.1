const person = {
  address: {
    street: "sample-street",
  },
};

console.log(person["address"]["street"]);

// Object Destructuring
const recipe = {
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup",
  },
};

// const {
//   ingredients: { flour, sugar },
// } = recipe;
// console.log(recipe);

const {
  ingredients: { flour },
} = recipe;
console.log(recipe);

const object = {
  key: "defaultValue",
};

const { key = "defaultValue" } = object;
console.log(object);

const car = {
  year: 2026,
};
console.log(car.has);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator.add(1, 2));

const learner = {
  name: "Nora",
  age: 45,
  contact: {
    email: "nora@email.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

// accessing home using dot notation
console.log(learner.contact.phone.home);

for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}

const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color.toUpperCase());
}

const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
