// ----- PSEUDO CODE -----
// declare function called pairElement that takes any string length. this function should return 2d array where each array has 2 strings inside
// declare variable called result and assign it with empty array
//      Loop through each character in the string input
//          declare array [currentCharacter, matchingPair]
//          ADD it to result
//      End Loop
// return result

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i];
    const matchingPair = pairs[currentCharacter];

    result.push([currentCharacter, matchingPair]);
  }

  return result;
}

console.log(pairElement("ATCGA"));
