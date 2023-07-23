/*
Level 4.6 of the JavaScript problem book
#1
Make a function that takes a date in the year-month-day format as a parameter and determines whether such a date exists or not.
Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
*/
((userDate) => {
  function isValidDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);

    // Проверка годового диапазона (1900-9999)
    if (year < 1900 || year > 9999) {
      return false;
    }

    // Проверка месячного диапазона (1-12)
    if (month < 1 || month > 12) {
      return false;
    }

    // Проверка дневного диапазона (1-последний день месяца)
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > lastDayOfMonth) {
      return false;
    }

    return true;
  }
  console.log(isValidDate(userDate)); // false
})("2023-02-30");
/*
#2
Make a function that will generate a string of a given length filled with random latin letters.
Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
*/
((N) => {
  function random() {
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
  }
  let string = "";
  for (let i = 0; i < N; i++) {
    string += random();
  }
  console.log(string);
})(10);
/*
No. 3
Make a function that will receive a string with words as a parameter, and return an uppercase string consisting of the first letters of the words.
Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
*/
((string) => {
  let array = string.split(" ");
  let res = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    res += element[0].toLocaleUpperCase();
  }
  console.log(res);
})(
  "Make a function that will receive a string with words as a parameter, and return an uppercase string consisting of the first letters of the words."
);
/*
#4
Make a function that will take an array of numbers as a parameter and replace each number with an array of its divisors.
Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
*/
((array) => {
  for (let i = 0; i < array.length; i++) {
    let newArray = [];
    for (let j = 1; j <= array[i]; j++) {
      if (array[i] % j == 0) {
        newArray.push(j);
      }
    }
    array[i] = newArray;
  }
  console.log(array);
})([9, 64, 78, 42, 11, 66, 80, 5, 7, 3, 1]);
/*
#5
Make a function that takes seconds as a parameter and returns the number of days, hours, minutes and seconds corresponding to these seconds as the following object:
Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
{
d: 12
h: 10
m: 59
s: 59
}
*/
((seconds) => {
  const secondsDay = 86400;
  const secondsHour = 3600;
  const secondsMinute = 60;

  const days = Math.floor(seconds / secondsDay);
  seconds %= secondsDay;

  const hours = Math.floor(seconds / secondsHour);
  seconds %= secondsHour;

  const minutes = Math.floor(seconds / secondsMinute);
  seconds %= secondsMinute;

  console.log({ days, hours, minutes, seconds });
})(1076399);
