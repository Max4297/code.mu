/*
Level 1.5
#1
Find the sum of all integers from 1 to 100.
Найдите сумму всех целых чисел от 1 до 100.
*/
(() => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
})();
/*
#2
Find the sum of all even integer numbers between 1 and 100.
Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
*/
(() => {
  let sum = 0;
  for (let i = 2; i <= 100; i += 2) {
    sum += i;
  }
  console.log(sum);
})();
/*
No. 3
Find the sum of all odd integers between 1 and 100.
Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
*/
(() => {
  let sum = 0;
  for (let i = 1; i <= 9; i += 2) {
    sum += i;
  }
  console.log(sum);
})();
/*
#4
You are given two integers. Find the remainder of dividing the first number by the second.
Даны два целых числа.Найдите остаток от деления первого числа на второе.
*/
((first, second) => {
  console.log(first / second);
})(2, 3);
/*
#5
Given a string. Iterate over and output to the console one by one all the characters from the end of the string.
Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
*/
((first) => {
  for (let i = 0; i >= 0; i--) {
    console.log(first[i]);
  }
})("word");
