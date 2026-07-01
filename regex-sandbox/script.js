const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let flag = "";

  if (caseInsensitiveFlag.checked) {
    flag += "i";
  }

  if (globalFlag.checked) {
    flag += "g";
  }
  return flag;
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  const matches = stringToTest.textContent.match(regex);

  if (matches) {
    stringToTest.innerHTML = stringToTest.textContent.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`,
    );

    testResult.textContent = matches.join(", ");
  } else {
    testResult.textContent = "no match";
  }
});
