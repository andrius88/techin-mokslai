"use strict";

// NEVEIKIA NEAISKU KODEL

const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));
const operation = prompt("Enter sign of math operation");

function calculate(num1, num2, operation) {
  let calcResult;
  console.log(`operation is: ${operation}`);
  try {
    if (
      operation !== `+` ||
      operation !== "-" ||
      operation !== "*" ||
      operation !== "/"
    ) {
      throw new Error("Invalid operation");
    }

    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }

    calcResult = operation === "+" ? num1 + num2 : "N";
    calcResult = operation === "-" ? num1 - num2 : "N";
    calcResult = operation === "*" ? num1 * num2 : "N";
    calcResult = operation === "/" ? num1 / num2 : "N";
  } catch (err) {
    alert(err);
  }

  return calcResult;
}

calculate(num1, num2, operation);

console.log("Result: " + calculate(num1, num2, operation));
