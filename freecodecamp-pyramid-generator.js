// pseudo code
// result = "\n"
// Condition 1: if not inverted:
//  Loop row from 1 to rows
//      spaces = rows-row
//      chars = (row * 2) - 1
//      add spaces + chars + newLine
// Condition 2: if inverted:
//  Loop row from rows down to 1
//      spaces = rows-row
//      chars = (row * 2) - 1
//      add spaces + chars + newLine
// return result;

function pyramid(str, rows, isInverted) {
  let result = "\n";

  if (!isInverted) {
    for (let i = 1; i <= rows; i++) {
      const spaces = rows - i;
      const chars = i * 2 - 1;
      result += " ".repeat(spaces) + str.repeat(chars) + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      const spaces = rows - i;
      const chars = i * 2 - 1;

      result += " ".repeat(spaces) + str.repeat(chars) + "\n";
    }
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
