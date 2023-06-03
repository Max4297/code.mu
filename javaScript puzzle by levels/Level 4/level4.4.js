/*
Level 4.4 of the JavaScript problem book
#1
Make a parameter that will take a number and the number of its divisors.
Сделайте функцию, которая параметром будет принимать число, а количество его делителей.
*/
((num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum++;
    }
  }
  console.log(sum);
})(50);
/*
#2
Choose a parameter that will accept and return the sign of the zodiac, this appropriate date.
Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
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
No. 3
Make a parameter that will take a number, return its array of divisors.
Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
*/
((num) => {
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
})(50);
/*
#4
Make a parameter that will take a number and check if it's prime or not.
Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
*/
((num) => {
  function simple() {
    let sum = 0;

    for (let i = 2; i <= num; i++) {
      if (num % i == 0) {
        sum++;
      }
      if (sum > 2) {
        return "Число не простое";
      }
    }
    return "Число простое";
  }
  console.log(simple());
})(19);
/*
#5
Make a parameter that will take a number and remove even digits from it.
Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
*/
((num) => {
  console.log(Number(String(num).replace(/[0,2,4,6,8]/g, "")));
})(205063);
/*
#6
Make a function that will fill an array with N random numbers from a given range.
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
*/
((min, max, quantity) => {
  let array = [];
  for (let i = 0; i < quantity; i++) {
    array.push(Number.parseInt(Math.random() * (max - min) + min));
  }
  console.log(array);
})(50, 100, 20);
