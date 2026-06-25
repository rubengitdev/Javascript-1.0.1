// pseudo code

//
// Declare empty array called inventory with product object (object of strings) as argument
// - key 1: product name = string lowercase
// - key 2: quantity = integer
// Example data:
// {name: "apple", quantity: 2},
// {name: "mango", quantity: 10},
// Declare empty array called inventory with product object (object of strings) as argument
// - key: product name = string lowercase
// - key: quantity = integer
const inventory = [];

// Declare function called findProductIndex with product name as argument
// ----- Pseudo code -----
// declare function findProductIndex with productName as argument
// For each product: compare productName with the search name
//      condition 1: if found: Return the index
//      condition 2: if not found / loop finishes: return -1
// function findProductIndex(productName)
// convert productname into lowercase
// loop through inventory
//      condition: if the product's name from inventory is equal to productName): return current index
//          otherwise, return -1

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
// Declare function addProduct with product object (object of strings) as argument
// ----- Pseudo code -----
// call check if product exist. Call function findProductIndex()
//      condition 1: if product exist add quantity passed into the function
//          log(<product-name> quantity updated)
//      condition 2: otherwise, add product to the inventory
//          log(<product-name> is added to the inventory)

function addProduct(newProduct) {
  const checkProductExist = findProductIndex(newProduct.name);

  if (checkProductExist >= 0) {
    const updatedQuantity =
      inventory[checkProductExist].quantity + newProduct.quantity;
    inventory[checkProductExist].quantity = updatedQuantity;
    console.log(`${newProduct.name} quantity updated`);
  } else {
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
  }
  return checkProductExist;
}

// Declare function removeProduct with product name and quantity as argument
// ----- Pseudo code -----
// find the product index
//      condition: if product not found: log not found
//          else: get the product
//          condition: if requested quantity is greater than available quantity: log "Not enough <product-name> available, remaining pieces: <product-quantity>"
//          else: substract quantity
//          condition: if quantity becomes zero: remove product from inventory
//          else: log "Remaining <product-name> pieces: <product-quantity>"

function removeProduct(productName, quantity) {
  const checkProductExist = findProductIndex(newProduct.name);

  if (!checkProductExist) {
  }
}
