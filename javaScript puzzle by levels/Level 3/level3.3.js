/*
Level 3.3 of the JavaScript problem book
#1
Given an array of words. Delete from it words consisting of more than three characters.
Дан со массивом фраз. Удалите из него слова, состоящие более чем из трех символов.
*/
((array) => {
  let newArray = array.filter((elem) => elem.length < 4);
  console.log(newArray);
})(["jekrr", "kdlff", "dsd", "g2", "x", "fgkg", "xgxs"]);
/*
#2
Given a number:
1357
Check that all digits of this number are odd.

Дано некоторое число:
1357
Проверьте, что все цифры этого числа являются нечетными.
*/
((num) => {
  let array = Array.from(String(num), Number);
  let flag = 1;
  array.forEach((element) => {
    if (!element % 3) {
      flag = 0;
    }
  });
  console.log(flag == 1 ? "All numbers odd" : "have even numbers");
})(930378);
/*
Given a word:
'abcba'
Check that this word is read the same from any side.

Дано некоторое слово:
'abcba'
Проверьте, что это слово читается одинаково с любой стороны.
*/
((word) => {
  console.log(
    word === word.split("").reverse().join("")
      ? "reads the same from either side"
      : "Doesn't read the same on both sides"
  );
})("abcba");
/*
#4
Given an array:
[
[
[11, 12, 13],
[14, 15, 16],
[17, 17, 19],
],
[
[21, 22, 23],
[24, 25, 26],
[27, 27, 29],
],
[
[31, 32, 33],
[34, 35, 36],
[37, 37, 39],
],
]
Find the sum of the elements of this array.

Дан массив:
[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
Найдите сумму элементов этого массива.
*/
((array) => {
  let newArray = array.flat(2).reduce((prev, current) => prev + current, 0);
  console.log(newArray);
})([
  [
    [11, 12, 13],
    [14, 15, 16],
    [17, 17, 19],
  ],
  [
    [21, 22, 23],
    [24, 25, 26],
    [27, 27, 29],
  ],
  [
    [31, 32, 33],
    [34, 35, 36],
    [37, 37, 39],
  ],
]);
