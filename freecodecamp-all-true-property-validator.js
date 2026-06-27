// ----- PSEUDO CODE -----
// DECLARE a function called truthCheck that accepts two arguments: an array of objects and a string representing property name
// RECEIVE the collection
// RECEIVE the property name
// LOOK at every object
// FOR each object
//      READ the requested property
//      Is it truthy?
// IF every object passed
//      RETURN true
// OTHERWISE
//      RETURN false

function truthCheck(collection, pre) {
  return collection.every((object) => object[pre]);
}
