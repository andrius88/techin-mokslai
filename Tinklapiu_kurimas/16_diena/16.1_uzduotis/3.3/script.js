"use strict";

const snowFlakesInput = String(
  prompt(
    "Įveskite, kiek snaigių nukrito per pirmąją sekundę ir kiek sekundžių snigo:"
  )
);

let snowFlakesCount = snowFlakesInput[0];
const snowFlakesTime = snowFlakesInput[2];

let snowFlakesTotal = snowFlakesCount * 1; // number of first second

for (let i = 2; i <= snowFlakesTime; i++) {
  snowFlakesCount = snowFlakesCount * 2;
  snowFlakesTotal = snowFlakesTotal + snowFlakesCount;
}

alert(`Visas snaigių sk: ${snowFlakesTotal}`);
