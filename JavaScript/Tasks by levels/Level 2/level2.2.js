/*
Level 2.2
#1
Given an array of numbers. Count the number of negative numbers in this array.
Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
*/
((array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] < 0 ? count++ : 0;
  }
  console.log(count);
})([6, -4, -4, 4, -3, 2, 1, -2]);
/*
#2
Given an array of numbers. Leave only positive numbers in it.
Дан массив с числами. Оставьте в нем только положительные числа.
*/
((array) => {
  console.log(array.filter((a) => a > 0));
})([6, -4, -4, 4, -3, 2, 1, -2]);
/*
No. 3
Given a line. Remove the penultimate character from this string.
Дана строка. Удалите предпоследний символ из этой строки.
*/
((str) => {
  console.log(str.slice(0, str.length - 1));
})("qoe");
/*
#4
Given a string. Find the position of the first zero in the string.
Дана некоторая строка. Найдите позицию первого нуля в строке.
*/
((string) => {
  console.log(string.indexOf("0"));
})("hell0");
/*
#5
Given an array, for example, this one:

[1, 2, 3, 4, 5, 6]
Divide the sum of the first half of the elements in this array by the sum of the second half of the elements.
Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
*/
((array) => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < array.length; i++) {
    sum1 < array.length - 1 / 2 ? (sum1 += array[i]) : (sum2 += array[i]);
  }
  console.log(sum1, sum2);
})([1, 2, 3, 4, 5, 6]);
