/*
Level 1.5

#1
Найдите сумму всех целых чисел от 1 до 100.
Find the sum of all integers from 1 to 100.
*/
(() => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
})();
/*
#2
Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
Find the sum of all even integer numbers between 1 and 100.
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
Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
Find the sum of all odd integers between 1 and 100.
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
Даны два целых числа. 
Найдите остаток от деления первого числа на второе.
You are given two integers. Find the remainder of dividing the first number by the second.
*/
((first, second) => {
  console.log(first / second);
})(2, 3);
/*
#5
Дана некоторая строка. 
Переберите и выведите в консоль по очереди все символы с конца строки.
Given a string. Iterate over and output to the console one by one all the characters from the end of the string.
*/
((first) => {
  for (let i = 0; i >= 0; i--) {
    console.log(first[i]);
  }
})("word");
