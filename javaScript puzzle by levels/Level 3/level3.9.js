/*
Level 3.9 of the JavaScript problem book
#1
Given a line. Check that this string contains only numbers.
Дана строка. Проверьте, что эта строка состоит только из цифр.
*/
((string) => {
  console.log(/^[0-9]+$/g.test(string));
})("564657");
/*
#2
Given a line. Check that this string contains only even digits.
Дана строка. Проверьте, что эта строка состоит только из четных цифр.
*/
((string) => {
  console.log(/^[02468]+$/g.test(string));
})("86482648");
/*
No. 3
Given an array of numbers. Remove from it numbers that have two or more zeros.
Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
*/
((array) => {
  console.log(array.filter((elem) => !/0{2,}/g.test(elem)));
})([75, 653, 4300, 230000, 2323, 20000]);
/*
#4
Find all numbers from 1 to 1000 whose sum of digits is 13.
Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
*/
(() => {
  let array = [];
  for (let i = 1; i <= 1000; i++) {
    let elem = Array.from(String(i), Number);
    let sum = elem.reduce((sum, curr) => sum + curr, 0);
    if (sum == 13) {
      array.push(i);
    }
  }
  console.log(array);
})();
/*
#5
Loop through the following array:
Сформируйте с помощью циклов следующий массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
*/
(() => {
  let array = [];
  let counter = 3;
  let j = 1;
  for (let i = 0; i < 3; i++) {
    array.push([]);
    for (j; j <= counter; j++) {
      array[i].push(j);
    }
    counter += 3;
  }
  console.log(array);
})();
