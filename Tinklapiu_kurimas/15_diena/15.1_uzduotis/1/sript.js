"use strict";

let day1 = prompt("Kiek pamokų yra pirmadienį?");
let day2 = prompt("Kiek pamokų yra antradienį?");
let day3 = prompt("Kiek pamokų yra trečiadienį?");
let day4 = prompt("Kiek pamokų yra ketvirtadienį?");
let day5 = prompt("Kiek pamokų yra penktadienį?");
let pamokSk =
  Number(day1) + Number(day2) + Number(day3) + Number(day4) + Number(day5);

alert("Pamokų sk. per savaitę: " + pamokSk);
let minSk = pamokSk * 45;
alert("Minučių sk. per savaitę: " + minSk);
