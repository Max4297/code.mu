/*Level 1.3 of the JavaScript problem book
#1
Given a line. If there is more than one character in this string, print the penultimate character of this string to the console.
Дана строка.Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
*/
((word) => {
  console.log(
    word.length > 1 ? word[word.length - 2] : "less than two charcters"
  );
})("word");
/*
#2
You are given two integers. 
Check that the first number is evenly divisible by the second.

Даны два целых числа. 
Проверьте, что первое число без остатка делится на второе.
*/
((first, second) => {
  console.log(first % second ? false : true);
})(65, 5);
