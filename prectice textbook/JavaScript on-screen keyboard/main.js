"use strict";

let input = document.querySelector("#input");
let firstLine = document.querySelectorAll("#firstLine .line__simple-keys div");
let secondLine = document.querySelectorAll(
  "#secondLine .line__simple-keys div"
);
let thirdLine = document.querySelectorAll("#thirdLine .line__simple-keys div");
let fourthLine = document.querySelectorAll(
  "#fourthLine .line__simple-keys div"
);
let fifthLine = document.querySelectorAll("#fifthLine .line__simple-keys div");
let backspaceKey = document.querySelector(".line__key-backspace");
let tabKey = document.querySelector(".line__key-tab");
let capsLockKey = document.querySelector(".line__key-capsLock");
let spaceKey = document.querySelector(".line__key-space");

key(firstLine); // Вызываем функцию key для каждой строки
key(secondLine);
key(thirdLine);
key(fourthLine);
key(fifthLine);

function key(array) {
  for (const key of array) {
    key.addEventListener("click", function () {
      input.focus();
      let keyValue = this.textContent;

      input.value += capsLockKey.classList.contains("line__key--pushed") // Добавляем букву в верхнем или нижнем регистре в зависимости от того была ли нажата кнопка Caps Lock.
        ? keyValue
        : keyValue.toLowerCase();
    });
  }
  return this;
}

backspaceKey.addEventListener("click", () => {
  input.value = input.value.slice(0, input.value.length - 1); // Удаляем последний символ в инпуте.
  input.focus();
});

tabKey.addEventListener("click", () => {
  input.value += " ".repeat(15); // Добавляем 15 пробелов в инпут.
  input.focus();
});

spaceKey.addEventListener("click", () => {
  input.value += " "; // Добавляем 1 пробел в инпут.
  input.focus();
});

capsLockKey.addEventListener("click", function () {
  this.classList.toggle("line__key--pushed"); // Добавляем класс модификатор кнопке Caps Lock.
  input.focus();
});
