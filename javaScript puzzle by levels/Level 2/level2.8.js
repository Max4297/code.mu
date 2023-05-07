/*
Level 2.8
#1
Дана строка с буквами. 
Проверьте, что в этой строке не более двух заглавных букв.
Given a string of letters. The matter is that in this line no more than two capital letters.
*/
((word) => {
  console.log();
  let array = word.match(/[A-Z]/g);
  console.log(array.length > 2 ? "больше двух" : "Два и менее");
})("Hellow Word");
/*
#2
Дана некоторая строка:

'1 22 333 4444 22 5555 1'
Удалите из этой строки все подстроки, в которых количество символов больше трех. 
В нашем случае должно получится следующее:

'1 22 333 22 1'
Dana is not defined:

"1 22 333 4444 22 5555 1"
Remove from this string all substrings with more than three characters. In our case, the following will happen:

"1 22 333 22 1"
*/
((word) => {
  let str = word.split(/[0-9]{4,} /).join("");
  console.log(str);
})("1 22 333 4444 22 5555 1");
/*
No. 3
Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
Слейте эти массивы в новый массив следующим образом:

[1, 2, 'a', 'b', 'c', 3]
Given two arrays:

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
Add these arrays in the new order:

[1, 2, 'a', 'b', 'c', 3]
*/
(() => {
  let arr1 = [1, 2, 3];
  let arr2 = ["a", "b", "c"];
  let last = arr1.pop();
  let merge = arr1.concat(arr2, last);
  console.log(merge);
})();
