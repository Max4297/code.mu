"use strict";

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let textParagraph = document.querySelector("#text");
let timerParagraph = document.querySelector("#timer");

let predictions = {
  1: "Лучше не выходить из дома",
  2: "Нужно идти на работу",
  3: "Деньги будут падать с неба",
  4: "Все будет хорошо",
  5: "Можно отдохнуть",
};

function random(min = 1, max = 5) {
  return Number.parseInt(Math.random() * max + min);
}

startBtn.addEventListener("click", function () {
  startBtn.classList.remove("active");
  stopBtn.classList.add("active");

  let timerId = setInterval(function () {
    timerParagraph.textContent = random();
  }, 100);

  stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
    textParagraph.textContent = predictions[timerParagraph.textContent];
    stopBtn.classList.remove("active");
  });
});
