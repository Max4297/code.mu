/*
Level 2.10
#1
Дана строка с буквами и цифрами. 
Проверьте, что в этой строке не более трех букв.
Given a string with letters and numbers. Check that there are no more than three letters in this string.
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
Дано число. Получите первую четную цифру с конца этого числа.
Given a number. Get the first even digit from the end of this number.
*/
/*
No. 3
Дана некоторая строка:

'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!':

'!bcde !bcde !bcde'
Given a line:

'abcde abcde abcde'
Replace the first character of each word in it with '!':

'!bcde !bcde !bcde'
*/
/*
#4
Дан массив с числами:

[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
Given an array with numbers:

[1, 2, 3, 3, 4, 5]
Check that this array has two identical elements in a row.
*/
