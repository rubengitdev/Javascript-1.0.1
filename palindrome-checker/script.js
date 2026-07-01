const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  const originalText = textInput.value;

  if (originalText === "") {
    alert("Please input a value");
    return;
  }

  const cleanedText = originalText.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    result.textContent = `${originalText} is a palindrome`;
  } else {
    result.textContent = `${originalText} is not a palindrome`;
  }
});
