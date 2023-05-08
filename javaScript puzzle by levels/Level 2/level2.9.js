/*
Level 2.9
#1

Дано некоторое число:

123456
Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

12 + 34 + 56
Given a number:

123456
Find the sum of the pairs of digits in this number. In our case, we mean the following:

12 + 34 + 56
*/
((num) => {
  let array = String(num).split(/(?=(?:\d{2})+$)/);
  console.log(array);
})(123456);
/*
#2
Дан массив с числами:

[1, 2, 3, 4, 5]
Выведите в консоль элементы этого массива в обратном порядке.
Given an array with numbers:

[1, 2, 3, 4, 5]
Print the elements of this array to the console in reverse order.
*/
((num) => {
  console.log(num.reverse());
})([1, 2, 3, 4, 5]);
