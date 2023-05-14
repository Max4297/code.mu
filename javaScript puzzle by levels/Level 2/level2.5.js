/*
Level 2.5
№1
Given a string, for example, this one:

'023m0df0dfg0'
Get an array of positions of all zeros in this one in the string.

Дана некоторая строка, например, вот такая:

'023m0df0dfg0'
Получите массив позиций всех нулей в этой в строке.
*/
((word) => {
  let array = word.split("");
  let secondArray = [];
  for (let i = 0; i < array.length; i++) {
    let index = array.indexOf("0", i);
    if (index >= -1) secondArray.push(index);
    i = index++;
  }
  console.log(secondArray);
})("00ll0 4 h0ll0");
/*
№2
Given a line:

'abcdefg'
Remove every third character from this string. In our case, it should look like this:

'abdeg'
Дана некоторая строка:

'abcdefg'
Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

'abdeg'
*/
((word) => {
  let array = word.split("");
  for (let i = 0; i < word.length; ) {
    array.splice((i = i + 2), 1);
  }
  console.log(array);
})("abcdefg");
/*
№3
Given an array, for example, this one:

[1, 2, 3, 4, 5, 6]
Divide the sum of the elements in even positions by the sum of the elements in odd positions.

Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]

Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
*/
((array) => {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? (count1 += array[i]) : (count2 += array[i]);
  }
  console.log(count2 / count1);
})([1, 2, 3, 4, 5, 6]);
