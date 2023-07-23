"use strict";

const arrayMonths = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Ноябрь",
  "Декабрь",
];
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let calendarContainer = document.querySelector(".calendar__container");
let calendarLinkPrev = document.querySelector(".calendar__link-prev");
let calendarLinkNext = document.querySelector(".calendar__link-next");
let ul = document.querySelector(".calendar__list");

let titleMonthYear = document.createElement("h4");

function addedHeaderMonthYear() {
  titleMonthYear.classList.add("calendar__titleMonthYear");
  calendarContainer.insertBefore(titleMonthYear, ul);
  return this;
}

function createCalendar() {
  let lastDate = new Date(currentYear, currentMonth + 1, 0);

  for (let i = 1; i <= lastDate.getDate(); i++) {
    let li = document.createElement("li");
    li.textContent = i;
    li.classList.add("calendar__item");
    ul.appendChild(li);

    if (
      i == date.getDate() &&
      currentMonth == date.getMonth() &&
      currentYear == date.getFullYear()
    ) {
      li.classList.add("calendar__item--current");
    }
  }
  return this;
}

function subtractMonth() {
  currentMonth--;
  if (currentMonth == -1) {
    currentMonth = 10;
    currentYear--;
  }
  return this;
}

function addMonth() {
  currentMonth++;
  if (currentMonth == 11) {
    currentMonth = 0;
    currentYear++;
  }
  return this;
}

function overritingMonthYear() {
  titleMonthYear.textContent = `${arrayMonths[currentMonth]} ${currentYear}`;
  return this;
}

addedHeaderMonthYear();
overritingMonthYear();
createCalendar();

calendarLinkPrev.addEventListener("click", () => {
  subtractMonth();
  ul.textContent = "";
  overritingMonthYear();
  createCalendar();
});

calendarLinkNext.addEventListener("click", () => {
  addMonth();
  ul.textContent = "";
  overritingMonthYear();
  createCalendar();
});
