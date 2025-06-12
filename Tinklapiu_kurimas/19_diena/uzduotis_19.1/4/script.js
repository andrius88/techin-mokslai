"use strict";

const targetNumber = Math.floor(Math.random() * 100);
let numberOfGueses = 0;

const form = document.forms["form"];
// alert(targetNumber);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let guesNumber = document.getElementById("number").value;

  if (guesNumber > targetNumber) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is bigger";
  } else if (guesNumber < targetNumber) {
    document.getElementById("resultText").innerHTML =
      "The guessed number is smaller";
  } else {
    document.getElementById("resultText").innerHTML =
      "The guessed number is good";
  }
  numberOfGueses++;

  document.getElementById(
    "resultCount"
  ).innerHTML = `${numberOfGueses} guessed was done`;
});
