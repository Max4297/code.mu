/*

Level 1.1

#1
Дано число. Проверьте, отрицательное оно или нет. 
Выведите об этом информацию в консоль.
Given a number. Check if it is negative or not. 
Print this information to the console.
*/

((num) => {
  console.log(num >= 0 ? true : false);
})(0);

/*
#2
Дана строка. Выведите в консоль длину этой строки.
Given a line. Print the length of this string to the console.
*/
((num) => {
  console.log(String(num).length);
})(534234);
/*
# 3
Дана строка. Выведите в консоль последний символ строки.
Given a line. Print the last character of the string to the console.
*/
((string) => {
  console.log(string[string.length - 1]);
})("534234");

/*
#4
Дано число. Проверьте, четное оно или нет.
Given a number. Check if it is even or not.
*/
((num) => {
  console.log(num % 2 ? false : true);
})(534234);
/*
#5

Two words are given. Check that the first letters of these words match.
*/
((first, second) => {
  console.log(first[0] === second[0] ? true : false);
})("hello", "horld");
/*
#6
Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
The word is given. Get his last letter. If the word ends with a soft sign, then get the penultimate letter.
*/

((word) => {
  console.log(
    word[word.length - 1] == "ь" ? word[word.length - 2] : word[word.length - 1]
  );
})("приветь");
