"use strict";

function calculation(A, B) {
  if (A > B) {
    console.log(`${A} yra daugiau nei ${B} (if)`);
  } else if (A < B) {
    console.log(`${A} yra mažiau nei ${B} (if)`);
  } else {
    console.log(`${A} yra lygus ${B} (if)`);
  }

  let res =
    A > B
      ? console.log(`${A} yra daugiau nei ${B} (ternary)`)
      : console.log(`${A} yra mažiau nei ${B} (ternary)`);

  // KAIP PADARYTI SU MATH NEAISKU
}

const inputA = Number(prompt("Įveskite pirmą skaičių:"));
const inputB = Number(prompt("Įveskite antrą skaičių:"));

calculation(inputA, inputB);
