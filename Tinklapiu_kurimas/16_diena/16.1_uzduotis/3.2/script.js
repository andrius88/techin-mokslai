"use strict";

const stepNumber = Number(prompt("Įveskite žingsnių kiekį iki mokyklos:"));

let clapNumber = 0,
  clickNumber = 0;

for (let i = 1; i <= stepNumber; i++) {
  if (i % 10 === 0) {
    clapNumber++;
  } else if (i % 5 === 0) {
    clickNumber++;
  }
}

alert(`Suplojimų bus: ${clapNumber}`);
alert(`Spragtelėjimų bus ${clickNumber}`);
