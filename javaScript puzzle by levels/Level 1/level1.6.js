/*
Level 1.6

#1
Дан массив с числами. Найдите сумму квадратов элементов этого массива.
Given an array of numbers. Find the sum of the squares of the elements of this array.
*/
((array) => {
  console.log(array.reduce((sum, elem) => sum + elem ** 2, 0));
})([2, 2, 3]);
/*
#2
Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
Given an array of numbers. Find the sum of the square roots of the elements in this array.
*/
((array) => {
  console.log(array.reduce((sum, elem) => sum + Math.sqrt(elem), 0));
})([16, 4]);
/*
No. 3
Дан массив с числами. Найдите сумму положительных элементов этого массива.
Given an array of numbers. Find the sum of the positive elements of this array.
*/

((array) => {
  console.log(array.reduce((sum, elem) => sum + (elem % 2 == 0 ? elem : 0), 0));
})([2, 2]);

/*
#4
Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
Given an array of numbers. Find the sum of those elements of this array that are greater than zero and less than ten.
*/

((array) => {
  console.log(
    array.reduce((sum, elem) => sum + (elem > 0 && elem < 10 ? elem : 0), 0)
  );
})([-2, 5]);
