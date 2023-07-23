"use strict";

let arr = ["Belarus", "Belgium", "Bulgaria"];
let elem = document.querySelector("#elem");
let ulList = document.querySelector("#list");

elem.addEventListener("input", function () {
  ulList.textContent = ""; // Очищаем каждый раз ul при вводе нового символа
  let res = arr.filter((word) => word.startsWith(this.value)); // фильтруем массив на соответсвие набору символов
  for (const iterator of res) {
    // Проходимся по каждому елементу отсортированого массива
    let li = document.createElement("li"); // создаем елемент li
    li.textContent = iterator; // Передаем значение елемента массива в li
    ulList.appendChild(li); // добавляем li в список ul
  }
  if (this.value == "") {
    // Очищаем список, если пользователь удалил все введенные символы
    ulList.textContent = "";
  }
});
