/*
Level 1.9
#1
Given an array with strings. Leave only those lines in this array that start with http://.
Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
*/
(() => {
  var array = ["http://", "http://sadasd", "3323sdsd"];
  var element = "http://";

  array = array.filter((el) => el.startsWith(element));

  console.log(array);
})();
/*
#2
Given an array with strings. Leave only those lines in this array that end with .html.
Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
*/
(() => {
  var array = ["http://", "http://sadasd.html", "3323sdsd.html"];
  var element = ".html";
  array = array.filter((el) => el.endsWith(element));
  console.log(array);
})();
/*
No. 3
Given an array of numbers. Increase each number in the array by 10 percent.
Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
*/
((array) => {
  console.log(array.map((a) => a / 10 + a));
})([3, 3, 2, 5, 100]);
