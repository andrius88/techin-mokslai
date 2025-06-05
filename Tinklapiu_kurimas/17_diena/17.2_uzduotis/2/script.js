"use strict";

function calculation(inputX) {
  let y;
  y = 16 * Math.pow(inputX, 4) + 2 * inputX;
  return y;
}

const inputX = Number(prompt("Įveskite X reikšmę:"));

alert("y = 16 * x^4 + 2 * x : " + calculation(inputX));
