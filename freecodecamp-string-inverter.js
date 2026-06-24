function reverseString(str) {
  const text = [...str];
  const reversedText = text.reverse().join("");

  return reversedText;
}

console.log(reverseString("hello"));
console.log(reverseString("howdy"));
console.log(reverseString("Greetings from Earth"));
