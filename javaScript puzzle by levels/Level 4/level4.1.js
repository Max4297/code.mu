/*
Level 4.1 of the JavaScript problem book
#1
Make a function that returns the current day of the week as a word.
Сделайте функцию, которая вернет текущий день недели словом.
*/
(() => {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(days[date.getDay()]);
})();

/*
#2
Make a function that will receive a date as a parameter, and return the day of the week as a word corresponding to this date.
Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
*/
((day) => {
  let date = new Date(day);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(days[date.getDay()]);
})("2023, 12, 6");
/*
No. 3
Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
Make a function that takes seconds as a parameter and returns the number of days corresponding to these seconds.
*/
((seconds) => {
  console.log(seconds / 60 / 60 / 24);
})(172800);
/*
#4
Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
Make a function that will take a number and a string as a parameter and trim this string to the length specified by the first parameter.
*/
((num, string) => {
  console.log(string.slice(0, num));
})(
  50,
  "Make a function that will take a number and a string as a parameter and trim this string to the length specified by the first parameter."
);
/*
#5
Make a function that will receive a date as a parameter, and return the zodiac sign corresponding to this date.
Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
*/
/*
#6
Make a function that takes a number as a parameter and returns the sum of its divisors.
Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
*/
((num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  console.log(sum);
})(90);
