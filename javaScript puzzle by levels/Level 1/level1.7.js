/*
Level 1.7
#1
Given a line:
'abcde'
Get an array of letters from this string.

Дана строка:
'abcde'
Получите массив букв этой строки.
*/
((str) => {
  console.log(str.split(""));
})("abcde");
/*
#2
Given a number:
12345
Get an array of digits for this number.

Дано некоторое число:
12345
Получите массив цифр этого числа.
*/
((str) => {
  console.log(Array.from(String(str), Number));
})(12345);
/*
No. 3
Given a number:
12345
Flip it:
54321

Дано некоторое число:
12345
Переверните его:
54321
*/
((str) => {
  console.log(Array.from(String(str), Number).reverse());
})(12345);
/*
#4
Given a number:
12345
Find the sum of the digits of this number.

Дано некоторое число:
12345
Найдите сумму цифр этого числа.
*/
((num) => {
  let array = Array.from(String(num), Number);
  console.log(array.reduce((a, b) => a + b, 0));
})(12345);
