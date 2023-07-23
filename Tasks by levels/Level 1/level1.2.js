/*
Level 1.2
#1
Given a number. Print the first digit of this number to the console.
Дано число. Выведите в консоль первую цифру этого числа.
*/
((num) => {
  console.log(String(num)[0]);
})(65647);
/*
#2
Given a number. Print the last digit of this number to the console.
Дано число. Выведите в консоль последнюю цифру этого числа.
*/
((num) => {
  console.log(num % 10);
})(65647);
/*
No. 3
Given a number. Print the sum of the first and last digits of this number to the console.
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
*/
((num) => {
  let stringNum = String(num);
  console.log(+stringNum[0] + +stringNum[stringNum.length - 1]);
})(65647);
/*
 #4
 Given a number. Print the number of digits in this number.
 Дано число. Выведите количество цифр в этом числе.
 */
((num) => {
  console.log(String(num).length);
})(65647);
/*
#5
Two numbers are given. 
Check that the first digits of these numbers match.
Даны два числа.
Проверьте, что первые цифры этих чисел совпадают.
*/
((first, second) => {
  console.log(String(first)[0] === String(second)[0] ? true : false);
})(45346, 43663);
