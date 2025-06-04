"use strict";

function callNTTimes(times, fn) {
  for (let i = 1; i <= times; i++) {
    // console.log("Hello, world! " + i);
    console.log("Test");
    fn();
  }
}

function printHW() {
  console.log("Hello, world!");
}

callNTTimes(5, printHW);

// KAZKODEL NESPSAUDINA 5 KARTUS ???
