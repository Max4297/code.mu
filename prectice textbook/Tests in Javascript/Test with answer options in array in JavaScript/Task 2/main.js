/*
№2
Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
*/
"use strict";

let questions = document.querySelectorAll("#test > div");
let answers = [0, 1, 2];
let button = document.querySelector("#button");

button.addEventListener("click", function () {
  for (let i = 0; i < questions.length; i++) {
    const elem = questions[i];
    let inputs = elem.querySelectorAll("input");
    let selectedAnswerIndex = -1;

    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].checked) {
        selectedAnswerIndex = j;
        break;
      }
    }

    if (selectedAnswerIndex === answers[i]) {
      elem.classList.remove("wrong");
      elem.classList.add("right");
    } else {
      elem.classList.remove("right");
      elem.classList.add("wrong");
    }
  }
});
