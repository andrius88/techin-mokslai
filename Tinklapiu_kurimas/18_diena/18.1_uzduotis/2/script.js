"use strict";

const myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log(`3rd item in array: ${myArray[2]}`);

myArray[2] = null;
console.log(`3Change the “thursday” value to null \n ${myArray}`);
console.log(`position (index) of step 2 element: ${myArray[2]}`);
