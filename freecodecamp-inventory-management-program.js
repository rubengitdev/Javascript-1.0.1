// pseudo code

<<<<<<< Updated upstream
//
=======
// Declare empty array called inventory with product object (object of strings) as argument
// - key 1: product name = string lowercase
// - key 2: quantity = integer
// Example data:
// {name: "apple", quantity: 2},
// {name: "mango", quantity: 10},
const inventory = [];

// Declare function called findProductIndex with product name as argument
// ----- Pseudo code -----
// declare function findProductIndex with productName as argument
// For each product: compare productName with the search name
//      condition 1: if found: Return the index
//      condition 2: if not found / loop finishes: return -1

function findProductIndex(productName) {
  const productNameLowerCase = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (productNameLowerCase === inventory[i].name) {
      return i;
    }
  }
  return -1;
}

// Declare function addProduct with product object (object of strings) as argument
// ----- Pseudo code -----
// Call function findProductIndex() to check if product exist
//      condition 1: if index exist: add new quantity to the current quantity
//          log(<product-name> quantity updated)
//      condition 2: add product object to the product inventory
//          log(<product-name> added to inventory)

function addProduct(newProduct) {
  const productIndex = findProductIndex(newProduct.name);
  const productNameLowerCase = newProduct.name.toLowerCase();

  if (productIndex >= 0) {
    inventory[productIndex].quantity += newProduct.quantity;
    console.log(`${productNameLowerCase} quantity updated`);
  } else {
    inventory.push({
      name: productNameLowerCase,
      quantity: newProduct.quantity,
    });
    console.log(`${productNameLowerCase} added to inventory`);
  }
}

// Declare function removeProduct with product name and quantity as argument
// ----- Pseudo code -----
// Find product index using findProductIndex() function
//      condition 1: if product does not exist: log (<product-name> not found) and stop the execution. otherwise, get the product object from the inventory.
//      condition 2: if requested quantity is greater then inventory product quantity: log (Not enough <product-name> available, remaining pieces: <product-quantity>), then stop the execution.
// substract inventory quantity with the requested quantity
//      condition 3: if the quantity after substraction is equal to 0: remove the product object from the inventory.
//  log remaining quantity

function removeProduct(productName, productQuantity) {
  const productNameLowerCase = productName.toLowerCase();
  const productIndex = findProductIndex(productNameLowerCase);
  const product = inventory[productIndex];

  if (productIndex === -1) {
    console.log(`${productNameLowerCase} not found`);
    return;
  }

  if (productQuantity > product.quantity) {
    console.log(
      `Not enough ${productNameLowerCase} available, remaining pieces: ${product.quantity}`,
    );
    return;
  }

  product.quantity -= productQuantity;
  console.log(`Remaining ${productNameLowerCase} pieces: ${product.quantity}`);

  if (product.quantity === 0) {
    inventory.splice(productIndex, 1);
  }
}

console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 10));
>>>>>>> Stashed changes
