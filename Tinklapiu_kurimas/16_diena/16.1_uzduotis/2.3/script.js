"use strict";

const mark1 = Number(prompt("Koks prmas Petriuko pažymys?"));
const mark2 = Number(prompt("Koks prmas Petriuko pažymys?"));
const mark3 = Number(prompt("Koks prmas Petriuko pažymys?"));
const mark4 = Number(prompt("Koks prmas Petriuko pažymys?"));
const mark5 = Number(prompt("Koks prmas Petriuko pažymys?"));

const markAverage = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

if (markAverage > 9.0) {
  alert("Petriukas gaus tris saldainius");
} else if (markAverage >= 7 && markAverage <= 9) {
  alert("Petriukas gaus du saldainius");
} else {
  alert("Petriukas gaus vieną saldainį");
}
