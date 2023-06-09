/*
Level 2.10
#1
Given a string with letters and numbers. Check that there are no more than three letters in this string.
Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
*/
((word) => {
  let array = word.match(/[A-Za-z]/g);
  if (array.length >= 3) {
    console.log("3 и больше букв");
  } else {
    console.log("Меньше 3 букв");
  }
})("v6j3d5");
/*
#2
Given a number. Get the first even digit from the end of this number.
Дано число. Получите первую четную цифру с конца этого числа.
*/
((num) => {
  let array = String(num).split("");
  let res;
  console.log(array);
  array.forEach((element) => {
    element % 2 == 0 ? (res = element) : 0;
  });
  console.log(res);
})(795862363);
/*
No. 3
Given a line:
'abcde abcde abcde'
Replace the first character of each word in it with '!':
'!bcde !bcde !bcde'

Дана некоторая строка:
'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!':
'!bcde !bcde !bcde'
*/
((word) => {
  console.log(word.replace(/(^|\s)\S/g, " !").trim());
})("abcde abcde abcde");
/*
#4
Given an array with numbers:
[1, 2, 3, 3, 4, 5]
Check that this array has two identical elements in a row.

Дан массив с числами:
[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
*/
((array) => {
  console.log(/([0-9])\1/g.test(array.join("")));
})([1, 2, 3, 3, 4, 5]);
