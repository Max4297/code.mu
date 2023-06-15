"use strict";

function random(min = 1, max = 100) {
  return Number.parseInt(Math.random() * max + min);
}
let number = random();

let button = document.querySelector("button");
let p = document.querySelector("#result");
let input = document.querySelector("input");

button.addEventListener("click", function () {
  let userValue = Number(input.value);
  console.log(number, userValue);
  if (userValue < number) {
    p.textContent = "введите число побольше";
  } else if (userValue > number) {
    p.textContent = "введите число поменьше";
  } else {
    p.textContent = "Вы выиграли";
  }
});
