"use strict";

function findType(input) {
  return typeof input;
}

alert(
  "Kintamasis, kurio reikšmė yta 'Jurgis' yra " + findType("Jurgis") + " tipo."
);
