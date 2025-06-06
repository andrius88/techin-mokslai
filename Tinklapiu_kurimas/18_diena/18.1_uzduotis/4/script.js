"use strict";

const arrNumbers = [1, 4, 8];

function sumArrElements(totalSum, currValue) {
  return totalSum + currValue;
}

let answer = arrNumbers.reduce(sumArrElements);

console.log(`Sum of array elements: ${answer}`);
