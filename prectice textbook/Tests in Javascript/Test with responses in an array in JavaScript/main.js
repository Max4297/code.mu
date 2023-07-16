/*
Завдання 1
№1
Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.
*/
"use strict";

let answers = ["ответ 1", "ответ 2", "ответ 3"];
let questions = document.querySelectorAll("#test div");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let input = question.querySelector("div input");
    if (input.value == answers[i]) {
      question.classList.remove("wrong");
      question.classList.add("right");
    } else {
      question.classList.remove("right");
      question.classList.add("wrong");
    }
  }
});
