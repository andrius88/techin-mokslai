"use strict";

const toDoform = document.forms["todolist"];
//alert(toDoform.value);

toDoform.addEventListener("submit", (event) => {
  event.preventDefault();

  let toDoInput = document.getElementById("task").value;
  alert(toDoInput);

  let toDoUl = document.getElementById("list");

  // if (guesNumber > targetNumber) {
  //   document.getElementById("resultText").innerHTML =
  //     "The guessed number is bigger";
  // } else if (guesNumber < targetNumber) {
  //   document.getElementById("resultText").innerHTML =
  //     "The guessed number is smaller";
  // } else {
  //   document.getElementById("resultText").innerHTML =
  //     "The guessed number is good";
  // }
  // numberOfGueses++;

  // document.getElementById(
  //   "resultCount"
  // ).innerHTML = `${numberOfGueses} guessed was done`;
});
