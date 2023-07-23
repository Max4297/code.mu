/*
Задание 1
№1
Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.
№2
Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
*/
"use strict";

let test = document.querySelector("#test");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
  let questions = document.querySelectorAll("#test div input[data-right]");
  for (const input of questions) {
    let div = input.parentElement.parentElement;

    if (input.checked) {
      div.classList.remove("wrong");
      div.classList.add("right");
    } else {
      div.classList.remove("right");
      div.classList.add("wrong");
    }
  }
});
