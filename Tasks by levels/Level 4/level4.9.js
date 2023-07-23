/*
Level 4.9 of the JavaScript problem book
#1
Make a function that will return the number of days left until February 29th.
Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
*/
(() => {
  const today = new Date();
  let currentYear = today.getFullYear();
  while (currentYear % 4 !== 0) {
    currentYear++;
  }
  let feb29 = new Date(`${currentYear}-02-29`);
  let res = Math.ceil((feb29 - today) / 1000 / 60 / 60 / 24);
  console.log(res + " days to 29 February");
})();
/*
#2
You can make a function that will return the next Maslenitsa, which is celebrated on Sunday of winter.
Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
*/
(() => {
  const date = new Date();
  date.setMonth(2);
  date.setDate(0);
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }
  console.log(date);
})();
/*
No. 3
Make a function that will return a random color.
Сделайте функцию, которая будет возвращать случайный цвет.
*/
(() => {
  function random(min = 0, max = 255) {
    return Number.parseInt(Math.random() * max + min);
  }

  console.log("rgb(" + random() + "," + random() + "," + random() + ")");
})();
/*
#4
Execute a function whose parameter will take an array of numbers and return the set of divisors of all numbers from the passed array.
Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
*/

((numbers) => {
  const maxNumber = Math.max(...numbers);
  const resultArray = [];
  if (numbers.length === 0) {
    return [];
  }
  for (let i = 1; i <= maxNumber; i++) {
    if (numbers.every((number) => number % i === 0)) {
      resultArray.push(i);
    }
  }
  console.log(resultArray);
})([5, 25, 50, 10, 100, 15]);
/*
#5
Make a function that defines an array of 2D numbers and returns an array of the maximum numbers in each subarray.
Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
*/
((array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = [Math.max(...array[i])];
  }
  console.log(array);
})([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
