/*
Level 3.2 of the JavaScript problem book
#1

Print to the console all numbers between 10 and 1000 that have an even penultimate digit.
Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
*/
(() => {
  for (let i = 10; i < 1000; i += 2) {
    let elem = String(i).match(/[0248]\d$/);
    if (elem !== null) console.log(elem.input);
  }
})();
/*
#2

Given an array. Remove every fifth element from it.
Дан массив. Удалите из него каждый пятый элемент.
*/
((array) => {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % 5 == 0) array[i] = "";
  }
  console.log(array.filter((elem) => /\d/.test(elem)));
})([
  6, 6, 6, 7, 4, 3, 6, 75, 3, 3, 4, 53, 6346, 3456, 45, 654, 645, 64, 56, 456,
  54, 654, 654, 6, 546,
]);
/*
No. 3

Given some variable with a number:

let num = 5;
Make a string containing as many zeros as specified in the variable. In our case, the line will look like this:

'00000'
Дана некоторая переменная с числом:

let num = 5;
Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

'00000'
*/
((count) => {
  let word = "0";
  console.log(word.repeat(count));
})(5);
/*
#4

Given a line with the words:

'aaa bbb ccc eee fff'
Remove every second word from this line. In our case, it should look like this:

'aaa ccc fff'
Дана некоторая строка со словами:

'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

'aaa ccc fff'
*/
((word) => {
  let array = word.split(" ");
  for (let i = 1; i < array.length; i += 2) {
    array[i] = " ";
  }
  console.log(array.join(""));
})("aaa bbb ccc eee fff");
/*
#5

Given an array:

[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
]
Find the sum of the elements of this array.
Дан массив:

[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Найдите сумму элементов этого массива.
*/
((array) => {
  let newArray = array
    .flat(1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(newArray);
})([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
