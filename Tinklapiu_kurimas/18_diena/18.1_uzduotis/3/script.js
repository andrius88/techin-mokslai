"use strict";

const numbers = [1, 5, 10, 9, 4, 1];

let maxNum = numbers[0];

for (let i = 1; i <= numbers.length - 1; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
}

console.log(`Max number of array: ${maxNum}`);
