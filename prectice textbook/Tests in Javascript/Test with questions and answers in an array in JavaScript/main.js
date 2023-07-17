/*
Завдання 1
№1
Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.
*/
"use strict";

let answers = ["ответ 1", "ответ 2", "ответ 3"];
let questions = ["вопрос 1?", "вопрос 2?", "вопрос 3?"];
let parent = document.querySelector("#test");
let button = document.querySelector("#button");

window.addEventListener("load", function () {
  for (const question of questions) {
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
