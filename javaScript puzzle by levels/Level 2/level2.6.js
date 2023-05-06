/*
Level 2.6
#1
Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
Given a string with letters and numbers. Get an array of positions of all digits from this string.
*/
((word) => {
  let array = word.split("");
  let secondArray = [];
  array.forEach((element, index) =>
    Number.isInteger(Number(element)) == true ? secondArray.push(index) : 0
  );
  console.log(secondArray);
})("00ll0 4 h0ll0");
/*
#2
Дан массив с некоторыми числами, например, вот такой:

[123, 456, 789]
Напишите код, который перевернет числа в этом массиве по следующему принципу:

[321, 654, 987]
Given an array with some numbers, for example, like this:

[123, 456, 789]
Write code to flip the numbers in this array like this:

[321, 654, 987]
*/
((array) => {
  let newArray = array.map((el) =>
    Number(String(el).split("").reverse().join(""))
  );
  console.log(newArray);
})([123, 456, 789]);
/*
No. 3
Дана некоторая строка с числом:

'1234567'

Отделите тройки цифр пробелами, начиная с конца числа. 
В нашем случае должно получится следующее:

'1 234 567'

Given a string with a number:

'1234567'
Separate the triplets of digits with spaces, starting from the end of the number. In our case, it should look like this:

'1 234 567'
*/
((array) => {
  let newArray = [];
  let count = 1;
  for (let i = 0; i <= array.length - 1; i++) {
    if (count % 3 == 0) {
      newArray.push(" ");
    }
    newArray.push(array[i]);
    count += 2;
  }
  console.log(newArray.join(""));
})("1234567");
/*
#4
Дана некоторая строка:

'AbCdE'
Смените регистр букв этой строки на противоположный. 
В нашем случае должно получится следующее:

'aBcDe'

Given a line:

'AbCdE'
Change the case of the letters of this string to the opposite. In our case, it should look like this:

'aBcDe'
*/
((word) => {
  let array = word.split("");
  let newArray = array
    .map((elem) =>
      elem !== elem.toLocaleUpperCase()
        ? elem.toLocaleUpperCase()
        : elem.toLocaleLowerCase()
    )
    .join("");
  console.log(newArray);
})("AbCdE");
/*
#5
Дан некоторый массив с числами, например, вот такой:

[1, 2, 3, 4, 5, 6]
Слейте пары элементов вместе:

[12, 34, 56]

Given some array with numbers, for example, like this:

[1, 2, 3, 4, 5, 6]
Merge pairs of elements together:

[12, 34, 56]
*/
((word) => {
  let array = [];
  let count = 1;
  for (let i = 0; i < word.length - 1 / 2; i += 2) {
    array.push(String(word[i]) + String(word[count]));
    count += 2;
  }
  console.log(array);
})([1, 2, 3, 4, 5, 6]);
/*
#6
Дана некоторая строка со словами:

'aaa bbb ccc eee fff'
Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

'aaa Bbb ccc Eee fff'
Given a line with the words:

'aaa bbb ccc eee fff'
Capitalize the first character of every second word in this line. In our case, it should look like this:

'aaa Bbb ccc Eee fff'
*/
((word) => {
  let array = word.split(" ");
  let newArray = array.map((el) =>
    el.replace(/(\w)/, function (match) {
      return match.toLocaleUpperCase();
    })
  );
  console.log(newArray);
})("aaa bbb ccc eee fff");
