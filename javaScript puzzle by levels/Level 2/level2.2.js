/*
Level 2.2
#1
Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
Given an array of numbers. Count the number of negative numbers in this array.
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
Дан массив с числами. Оставьте в нем только положительные числа.
Given an array of numbers. Leave only positive numbers in it.
*/
((array) => {
  console.log(array.filter((a) => a > 0));
})([6, -4, -4, 4, -3, 2, 1, -2]);
/*
No. 3
Дана строка. Удалите предпоследний символ из этой строки.
Given a line. Remove the penultimate character from this string.
*/
((str) => {
  console.log(str.slice(0, str.length - 1));
})("qoe");
/*
#4
Дана некоторая строка. Найдите позицию первого нуля в строке.
Given a string. Find the position of the first zero in the string.
*/
((string) => {
  console.log(string.indexOf("0"));
})("hell0");
/*
#5
Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
Given an array, for example, this one:

[1, 2, 3, 4, 5, 6]
Divide the sum of the first half of the elements in this array by the sum of the second half of the elements.
*/
((array) => {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < array.length; i++) {
    sum1 < array.length - 1 / 2 ? (sum1 += array[i]) : (sum2 += array[i]);
  }
  console.log(sum1, sum2);
})([1, 2, 3, 4, 5, 6]);
