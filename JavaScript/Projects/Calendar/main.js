"use strict";

let calendar = document.querySelector("#calendar");
let body = calendar.querySelector(".body");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let info = document.querySelector(".info");
let prev = calendar.querySelector(".prev");
let next = calendar.querySelector(".next");

draw(body, year, month);
updateInfo(year, month);

prev.addEventListener("click", function () {
  month = getPrevMonth(month);
  if (month === 11) {
    year--;
  }
  body.textContent = "";
  draw(body, year, month);
  updateInfo(year, month);
});

next.addEventListener("click", function () {
  month = getNextMonth(month);
  if (month === 0) {
    year++;
  }
  body.textContent = "";
  draw(body, year, month);
  updateInfo(year, month);
});

function draw(body, year, month) {
  let arr = range(getLastDay(year, month));

  let firstWeekDay = getFirstWeekDay(year, month);
  let lastWeekDay = getLastWeekDay(year, month);

  let res = chunk(normalize(arr, firstWeekDay, lastWeekDay), 7);
  createTable(body, res);
}

function createTable(parent, arr) {
  for (const subArray of arr) {
    let tr = document.createElement("tr");
    for (const elem of subArray) {
      let td = document.createElement("td");
      td.textContent = elem;
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}

function normalize(arr, left, right) {
  let amount = left + 6 - right;
  for (let i = 0; i < amount; i++) {
    if (i < left) {
      arr.unshift("");
    } else {
      arr.push("");
    }
  }
  return arr;
}

function getFirstWeekDay(year, month) {
  let date = new Date(year, month, 1);
  let num = date.getDay();

  if (num == 0) {
    return 6;
  } else {
    return num - 1;
  }
}

function getLastWeekDay(year, month) {
  let date = new Date(year, month + 1, 0);
  let num = date.getDay();

  if (num == 0) {
    return 6;
  } else {
    return num - 1;
  }
}

function getLastDay(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

function range(count) {
  let arr = new Array();
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}

function chunk(arr, n) {
  let result = new Array();

  for (let i = 0; i < arr.length; i++) {
    while (arr.length) result.push(arr.splice(0, n));
  }
  return result;
}

function updateInfo(year, month) {
  let monthNames = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  info.textContent = `${monthNames[month]} ${year}`;
}

function getPrevMonth(month) {
  return month === 0 ? 11 : month - 1;
}

function getNextMonth(month) {
  return month === 11 ? 0 : month + 1;
}
