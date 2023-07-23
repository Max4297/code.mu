"use strict";

let events = {
  2000: [
    {
      date: "20.01.2000",
      name: "событие 1",
      text: "описание события 1",
    },
    {
      date: "21.01.2000",
      name: "событие 2",
      text: "описание события 2",
    },
    {
      date: "21.01.2000",
      name: "событие 3",
      text: "описание события 3",
    },
  ],
  2001: [
    {
      date: "10.02.2001",
      name: "событие 3",
      text: "описание события 3",
    },
    {
      date: "11.02.2001",
      name: "событие 4",
      text: "описание события 4",
    },
    {
      date: "12.02.2001",
      name: "событие 5",
      text: "описание события 5",
    },
  ],
  2002: [
    {
      date: "01.03.2002",
      name: "событие 6",
      text: "описание события 6",
    },
    {
      date: "02.04.2002",
      name: "событие 7",
      text: "описание события 7",
    },
    {
      date: "03.05.2002",
      name: "событие 8",
      text: "описание события 8",
    },
    {
      date: "04.06.2002",
      name: "событие 9",
      text: "описание события 9",
    },
  ],
};

function logKey(eventKey) {
  if (eventKey.key == "Enter") {
    // проверяем чтобы была нажата именно ктопка "Enter"
    table.textContent = ""; // Очищаем таблицу

    for (const key1 in events[this.value]) {
      // перебираем по очереди каждый объект внутри массива
      let tr = document.createElement("tr"); // создаем строку для каждой даты
      for (const key2 in events[this.value][key1]) {
        // перебираем по очереди каждый елемент объекта
        let td = document.createElement("td"); // создаем ячейку для каждого елемента внутренего массива
        td.textContent = events[this.value][key1][key2]; // присваеваем значение каждой ячейке пербирая объект
        tr.appendChild(td); // добавляем в строку ячейку
      }
      table.appendChild(tr); // добавляем в таблицу строку с ячейками
    }
  }
}

let table = document.querySelector("#table");
input.addEventListener("keypress", logKey); // Обрабатываем нажатие клавиши и наполяем таблицу
