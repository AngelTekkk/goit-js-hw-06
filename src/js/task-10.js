const inputEl = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let amountOfBoxes = 0;

inputEl.addEventListener("input", (event) => {
  amountOfBoxes = Number(event.currentTarget.value);
});
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  let createdBoxes = [];
  for (let i = 0; i < amountOfBoxes; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${30 + [i] * 10}px`;
    boxEl.style.height = `${30 + [i] * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    createdBoxes.push(boxEl);
  }
  boxesEl.append(...createdBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
