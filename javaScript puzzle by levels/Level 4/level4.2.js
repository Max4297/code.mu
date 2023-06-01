/*
Level 4.2 of the JavaScript problem book
#1
Make a function that takes a number as a parameter and returns the sum of its digits.
Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
*/
((num) => {
  let array = Array.from(String(num), Number).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(array);
})(535);
/*
#2
Make a function that will take a number as a parameter and remove zeros from it.
Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
*/
((num) => {
  console.log(Number(String(num).replace(/0/g, "")));
})(50300050);
/*
No. 3
Make a function that will return how many days have passed or are left until a given date in the year, depending on whether this date has already been or not.
Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
*/
((userDate) => {
  let date = new Date(userDate);
  let now = new Date();
  console.log(
    parseInt(Math.abs((now - date) / (1000 * 60 * 60 * 24))) + " days"
  );
})("2040,10,25");
/*
#4
Make a function that takes a year as a parameter and checks if it is a leap year or not.
Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
*/
((year) => {
  let date = new Date(year + "-02-29");
  console.log(date.getDate() == 29 ? "leap year" : "Not a leap year");
})("2020");
/*
#5
Make a function that will return an array of all leap years in the previous hundred years.
Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
*/
(() => {
  let array = [];
  for (let i = 1923; i <= 2023; i++) {
    let date = new Date(i + "-02-29");
    if (date.getDate() == 29) {
      array.push(i);
    }
  }
  console.log(array);
})();
/*
#6
Make a function that will return how many days are left until the end of the current month.
Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
*/
(() => {
  let currentDate = new Date();
  let lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  let daysToEndOfMonth = lastDayOfMonth.getDate() - currentDate.getDate() + 1;
  console.log(daysToEndOfMonth);
})();
/*
#7
Make a function that returns the previous, current and next days of the week as a word as the following object:
Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
next: 'mon',
curr: 'sun',
prev: 'Sat',
}
*/
(() => {
  let date = new Date("2023, 06, 5");
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let res = {
    next: days[day + 1] == undefined ? days[0] : days[day + 1],
    curr: days[day],
    prev: days[day - 1] == undefined ? days[6] : days[day - 1],
  };

  console.log(res);
})();
