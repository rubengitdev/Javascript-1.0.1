// ----- PSEUDO CODE -----
// DECLARE a function called whatIsInAName that accepts an array of objects and a source object
// RECEIVE the collection (array of objects)
// RECEIVE the source object
// Look at every object in the collection
//      FOR each object
//          CHECK every property in the source object
//          IF ALL property match
//              Keep the object
//          OTHERWISE
//              Throw it away
// return the filtered collection

function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter((object) =>
    keys.every((key) => object[key] === source[key]),
  );
}
