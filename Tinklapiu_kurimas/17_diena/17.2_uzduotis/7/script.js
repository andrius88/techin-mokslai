"use strict";

const inputCode = Number(prompt("Įveskite orų kodą (1..4):"));

switch (inputCode) {
  case 1:
    alert(`1 - saulėta`);
    break;
  case 2:
    alert(`2 - lietinga`);
    break;
  case 3:
    alert(`3 - vėjuota`);
    break;
  case 4:
    alert(`4 - sniegas`);
    break;
  default:
    alert(`Netisingas kodas`);
}
