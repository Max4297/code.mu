/*
Level 2.3
#1
Two words are given. Check that the last letter of the first word matches the first letter of the second word.
Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
*/
((word1, word2) => {
  console.log(word1[0] === word2[0]);
})("hello", "hello");
/*
#2
Given a string. Find the position of the third zero in the string.
Дана некоторая строка. Найдите позицию третьего нуля в строке.
*/
((string) => {
  let array = string.split("");
  let count = 0;
  for (let i = 0; i < 3; i++) {
    let index = array.indexOf("0") + 1;
    count += index;
    array.splice(0, index);
  }
  console.log(count);
})("Giv0n numbers se0arated by co0mas:");
/*
No. 3
Given numbers separated by commas:

'12,34,56'
Find the sum of these numbers.
Даны числа, разделенные запятыми:

'12,34,56'
Найдите сумму этих чисел.
*/
((string) => {
  console.log(string.split(",").reduce((a, b) => a + +b, 0));
})("12,34,56");
/*
#4
The date is given in the following format:

'2025-12-31'
Convert this date to the following object:

{
year: '2025'
month: '12'
day: '31'
}
Дана дата в следующем формате:

'2025-12-31'
Преобразуйте эту дату в следующий объект:

{
	year: '2025',
	month: '12',
	day: '31',
}
*/
((string) => {
  let array = string.split("-");
  let date = {};
  date.year = array[0];
  date.month = array[1];
  date.day = array[2];
  console.log(date);
})("2025-12-31");
