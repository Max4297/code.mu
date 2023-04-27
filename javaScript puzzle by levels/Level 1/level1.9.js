/*
Level 1.9

#1
Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
Given an array with strings. Leave only those lines in this array that start with http://.
*/
/*
#2
Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
Given an array with strings. Leave only those lines in this array that end with .html.
*/
/*
No. 3
Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
Given an array of numbers. Increase each number in the array by 10 percent.
*/
((array) => {
  console.log(array.map((a) => a / 10 + a));
})([3, 3, 2, 5, 100]);
