"use strict";
// Объявляем переменные
let table = document.querySelector("#table");
let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let counter = 0;
let timerId;
let set = new Set();

// Создаем таблицу
createTable();

// Заполняем объект Set рандомными силами
let tdes = document.querySelectorAll("td");

while (set.size < 10) {
  set.add(random());
}

console.log(set);

// Закрашиваем синим неверно указанные клетки
for (const td of tdes) {
  td.addEventListener("click", () => (td.style.background = "blue"));
}

// Закрашиваем красным верно указанные клетки и выводим сообщение
for (const elem of set) {
  tdes[elem].addEventListener("click", redSquare);
}

timer.textContent = "Таймер: 60 seconds";

// Привзяываем обработчики событий к кнопка start и stop
startBtn.addEventListener("click", timerFunc);
stopBtn.addEventListener("click", () => clearInterval(timerId));

// Functions

// Функция которая красит создает таблицу
function createTable() {
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.style.background = "green";
    }
    table.appendChild(tr);
  }
}

// Функция которая генерирует рандомный элемент от 1 до 100
function random(min = 1, max = 101) {
  return Number.parseInt(Math.random() * (max - min) + min);
}

// Функция которая красит квадратики в красный цвет и выводит сообщение если угадано 10 квадратов
function redSquare() {
  counter++;
  this.style.background = "red";
  if (counter == 11) {
    alert("You win");
  }
}

// Функция которая создает таймер
function timerFunc() {
  let secondsTimer = 60;
  timerId = setInterval(function () {
    secondsTimer = --secondsTimer;
    timer.textContent = "Таймер: " + secondsTimer + " seconds";
    if (secondsTimer < 1) {
      clearInterval(timerId);
      alert("You lose");
    }
  }, 1000);
  // Отвязываем обработчик события чтобы функция вызывалась только 1 раз
  this.removeEventListener("click", func);
}
