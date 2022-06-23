function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener(
  "click",
  () => (
    (body.style.backgroundColor = getRandomHexColor()),
    (colorEl.textContent = getRandomHexColor())
  )
);
