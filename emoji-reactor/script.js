// const happyBtn = document.querySelector("#happy-btn");
// const confusedBtn = document.querySelector("#confused-btn");
// const sadBtn = document.querySelector("#sad-btn");
// const lovingBtn = document.querySelector("#loving-btn");

const btns = document.querySelectorAll(".emoji-btn");

function updateCount(button) {
  const countElement = button.querySelector(".count");
  const currCount = Number(countElement.textContent.split("/")[0]);

  if (currCount === 10) {
    return;
  }
  countElement.textContent = `${currCount + 1}/10`;
}

btns.forEach((button) => {
  button.addEventListener("click", () => {
    updateCount(button);
  });
});

// happyBtn.addEventListener("click", () => updateCount(happyBtn));
// confusedBtn.addEventListener("click", () => updateCount(confusedBtn));
// sadBtn.addEventListener("click", () => updateCount(sadBtn));
// lovingBtn.addEventListener("click", () => updateCount(lovingBtn));
