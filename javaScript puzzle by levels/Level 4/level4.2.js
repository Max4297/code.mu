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
/*
#5
Make a function that will return an array of all leap years in the previous hundred years.
Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
*/
/*
#6
Make a function that will return how many days are left until the end of the current month.
Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
*/
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
