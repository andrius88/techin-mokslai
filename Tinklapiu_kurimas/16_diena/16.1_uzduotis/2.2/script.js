"use strict";

const frogMass = Number(prompt("Kiek sveria varlė?"));
const frogNumber = Number(prompt("Kiek varlių norima stebėti?"));

const frogMassTotal = (frogMass / 1000) * frogNumber;

if (frogMassTotal >= 5.0) {
  alert("Varlių stebėjimui pakanka");
} else {
  alert("Varlių stebėjimui per mažai");
}
