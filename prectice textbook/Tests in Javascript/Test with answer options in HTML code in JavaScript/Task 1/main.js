/*
Задание 1
№1
Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.
*/
"use strict";

let test = document.querySelector("#test");
let button = document.querySelector("#button");
let questions = document.querySelectorAll("#test div input");

for (const input of questions) {
  input.addEventListener("click", function () {
    let div = input.parentElement.parentElement;
    if (input.hasAttribute("data-right")) {
      div.classList.add("right");
      div.classList.remove("wrong");
    } else {
      div.classList.add("wrong");
      div.classList.remove("right");
    }
  });
}
