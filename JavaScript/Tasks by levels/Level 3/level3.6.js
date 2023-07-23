/*
Level 3.6 of the JavaScript problem book
#1
Given an array of numbers. Remove from it numbers with more than three digits.
Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
*/
((array) => {
  console.log(array.filter((elem) => /^\d{1,3}$/g.test(elem)));
})([665, 78941, 5, 233, 2, 55, 3246]);
/*
#2
Given a number, for example:
let num = 12345;
Check that all digits of this number are greater than zero.
Дано число, например, вот такое:
let num = 12345;
Проверьте, что все цифры этого числа больше нуля.
*/
(() => {
  let num = 12345;
  let string = String(num);
  console.log(/0/.test(string));
})();
/*
No. 3
Given an array, for example, this one:
[123, 456, 789]
Merge all the elements of this array into one array, splitting them character by character:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
Дан некоторый массив, например, вот такой:
[123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
((array) => {
  let newArray = array.join("");
  console.log(Array.from(newArray, Number));
})([123, 456, 789]);
/*
#4
Given the following structure:
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
Find the sum of the elements of this structure.
Дан следующая структура:
Найдите сумму элементов этой структуры.
*/
((array) => {
  let data = [
    {
      1: 11,
      2: 12,
      3: 13,
    },
    {
      1: 21,
      2: 22,
      3: 23,
    },
    {
      1: 24,
      2: 25,
      3: 26,
    },
  ];
  let sum = 0;
  for (const elem of data) {
    console.log(elem);
    for (const key in elem) {
      sum += elem[key];
    }
  }
  console.log(sum);
})();
