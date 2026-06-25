// ----- PSEUDO CODE -----
// declare a function called convertHTML that accept a string as argument. This function should return a new string by converting special characters
// & should be converted to &amp;.
// < should be converted to &lt;.
// > should be converted to &gt;.
// " should be converted to &quot;.
// ' should be converted to &apos;.

// declare variable called result and assign it with empty string
// declare entiry object
//      LOOP through each characters
//          IF character exists in the entities: ADD corresponding entity
//          ELSE: ADD original character
//      END LOOP
// return loop

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i];

    if (entities[currentCharacter]) {
      result += entities[currentCharacter];
    } else {
      result += currentCharacter;
    }
  }
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
