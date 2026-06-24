// Build a String Repeating Function

function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("*", 10));
