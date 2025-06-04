"use strict";

const spanStart = Number(prompt("Įveskite intervalo pradžią:"));
const spanEnd = Number(prompt("Įveskite intervalo pabaigą:"));
let tShortNumber = 0;

for (let i = spanStart; i <= spanEnd; i++) {
  if (i % 6 === 0) {
    tShortNumber++;
  }
}

alert(`Reikalingų marškinėlių skaičius: ${tShortNumber}`);
