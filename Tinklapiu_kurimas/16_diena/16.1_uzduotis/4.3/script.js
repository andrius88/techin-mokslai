"use strict";

const candyNumber = Number(prompt("Įveskite, kiek Petriukas gavo saldainių:"));
let candyLeft = candyNumber,
  numberOfDays = 0;

while (true) {
  const candPerDay = Number(prompt("Kiek suvalgė per dieną ?:"));

  if (candyLeft - candPerDay >= 0) {
    candyLeft = candyLeft - candPerDay;
    numberOfDays++;
  } else {
    break;
  }
}

alert(
  `Petriukui saldainių užteks ${numberOfDays} dienoms ir jam liks ${candyLeft} saldainiai.`
);
