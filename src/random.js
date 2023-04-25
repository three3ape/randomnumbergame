const Form = document.querySelector("form");
const setForm = document.querySelector("#form #set");
const putForm = document.querySelector("#form #put");
const cex = document.querySelector("#cex");
let result = document.querySelector("#result");

function play(event) {
  event.preventDefault();
  const settedNumber = setForm.value;
  const puttedNumber = putForm.value;

  display(settedNumber, puttedNumber);
}

function display(settedNumber, puttedNumber) {
  const randomNumber = Math.ceil(Math.random() * parseInt(settedNumber, 10));
  cex.innerText =
    "You chose: " + puttedNumber + ", The machine chose: " + randomNumber;

  if (parseInt(puttedNumber, 10) === randomNumber) {
    result.innerText = "You Win!";
  } else {
    result.innerText = "You Lost!";
  }
}

Form.addEventListener("submit", play);
