/*
Задание 1
№1
Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.
*/
"use strict";

let questions = {
  "Вопрос 1?": "ответ 1",
  "Вопрос 2?": "ответ 2",
  "Вопрос 3?": "ответ 3",
};

let parent = document.querySelector("#test");
let button = document.querySelector("#button");
let answers = Object.values(questions);

window.addEventListener("load", function () {
  for (const question of Object.keys(questions)) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = question;
    div.appendChild(p);
    let input = document.createElement("input");
    div.appendChild(input);
    parent.appendChild(div);
  }
});

button.addEventListener("click", function () {
  for (let i = 0; i < answers.length; i++) {
    let divs = parent.querySelectorAll("div");
    let inputs = parent.querySelectorAll("div input");
    let answer = answers[i];
    let userAnswer = inputs[i].value;
    if (userAnswer == answer) {
      divs[i].classList.remove("wrong");
      divs[i].classList.add("right");
    } else {
      divs[i].classList.remove("right");
      divs[i].classList.add("wrong");
    }
  }
});
