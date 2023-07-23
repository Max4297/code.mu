/*
Завдання 1
№1
Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. 
Пусть в этом случае инпут сразу проверяет ответ на правильность.
№2
Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку
*/
"use strict";

let questions = document.querySelectorAll("#test div");
let button = document.querySelector("#button");

let correctWrong = function (question, input) {
  if (input.dataset.right == input.value) {
    question.classList.add("right");
    question.classList.remove("wrong");
  } else {
    question.classList.remove("right");
    question.classList.add("wrong");
  }
};

for (const question of questions) {
  let input = question.querySelector("div input");
  input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      correctWrong(question, this);
    }
  });
}

button.addEventListener("click", function () {
  for (const question of questions) {
    let input = question.querySelector("div input");
    correctWrong(question, input);
  }
});
