/*
Level 2.4
#1
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
Given a string with letters and numbers. Get the position of the first digit in this string.
*/
((word) => {
  console.log(word.search(/\d/));
})("hello 4 hello");
/*
#2
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
Given an object with keys and values. Write the keys of the object to the first array, and the values to the second.
*/
((ob) => {
  console.log(Object.values(ob));
  console.log(Object.keys(ob));
})({
  a: 1,
  b: 2,
  c: 3,
});
/*
No. 3
Дано число. Выведите в консоль количество четных цифр в этом числе.
Given a number. Print to the console the number of even digits in this number.
*/
((ob) => {
  let num = String(ob).match(/[2468]/g);
  console.log(num.length);
})(4344214);
/*
#4
Дана некоторая строка:

'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

'AbCdE'
Given a line:

'abcde'
Convert all odd letters of this string to uppercase. In our case, it should look like this:

'AbCdE'
*/
((ob) => {
  let word = "";
  for (let i = 0; i < ob.length; i++) {
    i % 2 ? (word += ob[i].toUpperCase()) : (word += ob[i]);
  }
  console.log(word);
})("advxsd");
/*
#5
Дана некоторая строка со словами:

'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

'Aaa Bbb Ccc'
Given a line with the words:

'aaa bbb ccc'
Capitalize the first character of each word in this line. In our case, it should look like this:

'Aaa Bbb Ccc'
*/
