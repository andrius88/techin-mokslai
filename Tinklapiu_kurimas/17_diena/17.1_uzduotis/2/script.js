"use strict";

function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
  const markBMI = calculateBMI(markWeight, markHeight);
  const johnBMI = calculateBMI(johnWeight, johnHeight);

  const markVsJohn = markBMI > johnBMI;
  return markVsJohn;
}

function calculateBMI(weight, hight) {
  const BMI = weight / hight ** 2;
  return BMI;
}

const MarkWeight = Number(prompt("Įveskite Marko svorį, kg:"));
const MarkHeight = Number(prompt("Įveskite Marko ūgį, m:"));
const JohnWeight = Number(prompt("Įveskite Jono svorį, kg:"));
const JohnHeight = Number(prompt("Įveskite Jono ūgį, m:"));

alert(
  `Ar Marko KMI didesnis nei Jono: ${compareBMI(
    MarkWeight,
    MarkHeight,
    JohnWeight,
    JohnHeight
  )}.`
);
