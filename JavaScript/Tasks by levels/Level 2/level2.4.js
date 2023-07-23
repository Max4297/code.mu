/*
Level 2.4
#1
Given a string with letters and numbers. Get the position of the first digit in this string.
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
*/
((word) => {
  console.log(word.search(/\d/));
})("hello 4 hello");
/*
#2
Given an object with keys and values. Write the keys of the object to the first array, and the values to the second.
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
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
Given a number. Print to the console the number of even digits in this number.
Дано число. Выведите в консоль количество четных цифр в этом числе.
*/
((ob) => {
  let num = String(ob).match(/[2468]/g);
  console.log(num.length);
})(4344214);
/*
#4
Given a line:
'abcde'

Convert all odd letters of this string to uppercase. In our case, it should look like this:
'AbCdE'

Дана некоторая строка:

'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
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
Given a line with the words:

'aaa bbb ccc'
Capitalize the first character of each word in this line. In our case, it should look like this:

'Aaa Bbb Ccc'

Дана некоторая строка со словами:

'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

'Aaa Bbb Ccc'
*/
((str) => {
  let word = str.replace(/(^|\s)\S/g, (letter) => {
    return letter.toUpperCase();
  });
  console.log(word);
})("hello word how are you?");
