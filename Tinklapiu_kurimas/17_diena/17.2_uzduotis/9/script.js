"use strict";

console.log(`Triženkliai skaičiai, kurie dalijasi iš 3:`);

for (let i = 100; i <= 999; i++) {
  if (i % 3 === 0) {
    console.log(`${i}`);
  }
}
