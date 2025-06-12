"use strict";

const form = document.getElementById("form1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let textBox1 = document.getElementById("input1").value;
  let textBox2 = document.getElementById("input2").value;

  document.getElementById("sum").innerHTML = +textBox1 + +textBox2;
});
