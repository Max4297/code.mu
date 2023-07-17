/*
Задание 1
№1
Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.
*/
"use strict";

let questions = [
  {
    text: "вопрос 1?",
    right: "ответ 1",
  },
  {
    text: "вопрос 2?",
    right: "ответ 2",
  },
  {
    text: "вопрос 3?",
    right: "ответ 3",
  },
];

let parent = document.querySelector("#test");
let button = document.querySelector("#button");

window.addEventListener("load", function () {
  for (let i = 0; i < questions.length; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = questions[i].text;
    div.appendChild(p);
    let input = document.createElement("input");
    div.appendChild(input);
    parent.appendChild(div);
  }
});

button.addEventListener("click", function () {
  for (let i = 0; i < questions.length; i++) {
    let divs = parent.querySelectorAll("div");
    let inputs = parent.querySelectorAll("div input");
    let rightAnswer = questions[i].right;
    let userAnswer = inputs[i].value;
    if (userAnswer == rightAnswer) {
      divs[i].classList.remove("wrong");
      divs[i].classList.add("right");
    } else {
      divs[i].classList.remove("right");
      divs[i].classList.add("wrong");
    }
  }
});
