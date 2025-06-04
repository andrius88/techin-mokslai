"use strict";

function celsiusToFahrenheit(temp) {
  const tempFahreng = (temp * 9) / 5 + 32;
  return tempFahreng;
}

const tempCels = Number(prompt("Įveskite temperatųrą Celcijaus laisniais:"));

alert(
  `Celcijaus ${tempCels} laipsniai bus ${celsiusToFahrenheit(
    tempCels
  )} Farengeito laipsniai.`
);
