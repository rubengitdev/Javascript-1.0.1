// ----- pseudo code -----
// create a function called generatePassword(param);
// create variable characters & assign all allowed characters, symbol, number, and special character.
// create variable result & assign empty string
// repeat length times
// generate random index between 0 and character length - 1
// get character at random index
// add character to the result variable
// return result

// create variable password assing result & assign result of calling generatePassword function
// log: "Generated password: " + password

function generatePassword(num) {
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`;
  let result = "";

  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];

    result += randomCharacter;
  }
  return result;
}

const password = generatePassword(10);
console.log(`Generated password: ${password}`);
