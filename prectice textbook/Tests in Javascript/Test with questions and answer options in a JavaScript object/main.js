"use strict";

let questions = [
  {
    text: "вопрос 1?",
    right: 0,
    variants: ["вариант 1", "вариант 2", "вариант 3"],
  },
  {
    text: "вопрос 2?",
    right: 1,
    variants: ["вариант 1", "вариант 2", "вариант 3"],
  },
  {
    text: "вопрос 3?",
    right: 2,
    variants: ["вариант 1", "вариант 2", "вариант 3"],
  },
];

let test = document.querySelector("#test");
let button = document.querySelector("#button");

for (const elem of questions) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.textContent = elem.text;
  div.appendChild(p);
  console.log(elem.right);
  for (let i = 0; i < elem.variants.length; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", elem.text);
    input.setAttribute("value", i); // Устанавливаем значение для input равное индексу варианта
    label.textContent = elem.variants[i];
    label.prepend(input);
    div.appendChild(label);
  }
  test.appendChild(div);
}

button.addEventListener("click", checkAnswers);

function checkAnswers() {
  let score = 0;

  const inputs = document.querySelectorAll("input[type='radio']:checked");

  inputs.forEach((input) => {
    const questionText = input.getAttribute("name");
    const questionIndex = questions.findIndex(
      (question) => question.text === questionText
    );
    const selectedAnswer = Number(input.value);
    const correctAnswer = questions[questionIndex].right;

    if (selectedAnswer === correctAnswer) {
      input.parentElement.parentElement.classList.remove("wrong");
      input.parentElement.parentElement.classList.add("right");
      score++;
    } else {
      input.parentElement.parentElement.classList.remove("right");
      input.parentElement.parentElement.classList.add("wrong");
    }
  });
}
