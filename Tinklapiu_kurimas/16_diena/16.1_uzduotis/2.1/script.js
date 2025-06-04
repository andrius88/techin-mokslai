"use strict";

const hight = Number(prompt("Iš kokio aukščio šoka parašiutininkas?"));
const time = Number(prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?"));

const fallTime = ((2 * hight) / 9.8) ** 0.5;

if (time <= fallTime) {
  alert("Parašiutas išsiskleis");
} else {
  alert("Parašiutas neišsiskleis");
}
