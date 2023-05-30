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
((clientDate) => {
  let date = new Date(clientDate);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  date = month + "." + day;

  console.log(date);

  if (date >= "03.21" && date <= "04.19") {
    console.log("Aries");
  }
  if (date >= "04.20" && date <= "05.20") {
    console.log("Taurus");
  }
  if (date >= "05.21" && date <= "06.20") {
    console.log("Gemini");
  }
  if (date >= "06.21" && date <= "07.22") {
    console.log("Cancer");
  }
  if (date >= "07.23" && date <= "08.22") {
    console.log("Leo");
  }
  if (date >= "08.23" && date <= "09.22") {
    console.log("Virgo");
  }
  if (date >= "09.23" && date <= "10.22") {
    console.log("Libra");
  }
  if (date >= "10.23" && date <= "11.21") {
    console.log("Scorpio");
  }
  if (date >= "11.22" && date <= "12.31") {
    console.log("Sagittarius");
  }
  if (date >= "01.01" && date <= "01.19") {
    console.log("Sagittarius");
  }
  if (date >= "12.22" && date <= "01.19") {
    console.log("Capricorn");
  }
  if (date >= "01.20" && date <= "02.18") {
    console.log("Aquarius");
  }
  if (date >= "02.19" && date <= "03.20") {
    console.log("Pisces");
  }
})("1997, 10, 17");
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
