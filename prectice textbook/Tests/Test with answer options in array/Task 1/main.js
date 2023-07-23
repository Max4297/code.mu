/*
Задание 1
№1
Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.
*/
"use strict";

let questions = document.querySelectorAll("#test > div");
let answers = [0, 1, 2];

for (let i = 0; i < questions.length; i++) {
  const elem = questions[i];
  let inputs = elem.querySelectorAll("input");
  for (let j = 0; j < inputs.length; j++) {
    const input = inputs[j];
    input.addEventListener("click", function () {
      if (i == answers[j]) {
        elem.classList.remove("wrong");
        elem.classList.add("right");
      } else {
        elem.classList.remove("right");
        elem.classList.add("wrong");
      }
    });
  }
}
