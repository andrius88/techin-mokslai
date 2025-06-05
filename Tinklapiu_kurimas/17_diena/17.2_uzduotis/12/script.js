"use strict";

const intA = Number(prompt(`Įveskite pirmą intervalo skaičių:`));
const intB = Number(prompt(`Įveskite paskutin5 intervalo skaičių:`));

let sum = 0;

for (let i = intA; i <= intB; i++) {
  sum = sum + i;
}

alert(`Intervalo skaičių suma yra: ${sum}`);
