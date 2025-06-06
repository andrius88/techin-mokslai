"use strict";

const arrNumbers = [1, 2, 3, 4, 5];
// const arrNumbers = [1, 2, -3, 4, 5];
// const arrNumbers = [0, 0, 1];
let isPositive = true;

function allPositive(arrayIn) {
  let isPositive = true;

  for (let index in arrayIn) {
    // console.log(`in for, i= ${index}`);
    if (arrayIn[index] <= 0) {
      isPositive = false;
    }
  }
  return isPositive;
}

alert(`All elements in array are positive: ${allPositive(arrNumbers)}`);
