"use strict";

function daysToHourMin(numberOfDays) {
  let hours, minutes;
  hours = numberOfDays * 24;
  minutes = numberOfDays * 24 * 60;
  return alert(
    `${numberOfDays} parų turi ${hours} valandų arba ${minutes} minučių`
  );
}

const numberOfDays = Number(prompt("Įveskite parų skaičių:"));

daysToHourMin(numberOfDays);
