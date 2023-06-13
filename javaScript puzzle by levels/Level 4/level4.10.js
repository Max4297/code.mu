/*
Level 4.10 of the JavaScript problem book
#1
Make a function that will take a letter as a parameter and check if it is a Cyrillic or Latin letter.
Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.
*/
((letter) => {
  function letterLatin(letter) {
    return /[a-zA-Z]/.test(letter);
  }
  console.log(letterLatin(letter) ? "letter Latin" : "letter Cyrillic");
})("L");
/*
#2
Make a function that takes an array as a parameter and shuffle the elements of this array in random order.
Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
*/
((array) => {
  function mix(array) {
    let newArray = [];
    let usedIndexes = new Set();

    for (let i = 0; i < array.length; i++) {
      let index = getRandomNumber(usedIndexes);
      newArray.push(array[index]);
      usedIndexes.add(index);
    }

    return newArray;
  }

  function getRandomNumber(usedIndexes) {
    let current = random();
    while (usedIndexes.has(current)) {
      current = random();
    }
    return current;
  }

  function random(min = 0, max = array.length) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  console.log(mix(array));
})([8, 32, 4, 2, 1, "d"]);
/*
No. 3
Text with words. Write down all the words of this text in a special object. The keys in this object will be letters, and the values will be arrays of words starting with these letters.
Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.
*/
((string) => {
  let array = string.split(" ");
  console.log(array);
  let obj = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  };

  for (const key in obj) {
    for (const elem of array) {
      if (elem[0] == key) {
        obj[key] = elem;
      }
    }
  }
  console.log(obj);
})(
  "Text with words. Write down all the words of this text in a special object. The keys in this object will be letters, and the values will be arrays of words starting with these letters."
);
/*
#4
Make a function that will take a number as a parameter, and return this number in words, that is, in words.
Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.
*/
((num) => {
  const obj = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty ",
    70: "seventy ",
    80: "eighty",
    90: "ninety",
  };
  let array = Array.from(String(num), Number);
  let length = array.length;
  function two(num = array[length - 2] + "" + array[length - 1]) {
    console.log(num);
    if (array[length - 2] == 1) {
      // для числа де перша цифра 1, а друга від 1 до 6
      return obj[num];
    } else if (array[length - 1] == 0) {
      // для числа де друга цифра 0
      return obj[num];
    } else {
      // для числа де друга цифра більше 0
      return obj[num - array[length - 1]] + " " + obj[array[length - 1]];
    }
  }
  function stringNumber() {
    switch (length) {
      case 1:
        return obj[num];
      case 2:
        return two();
      case 3:
        return obj[array[length - 3]] + " hundred " + two();
    }
  }
  console.log(stringNumber());
})(631);
/*
#5
Make a function that takes a number as a parameter and returns an array of its divisors, which are prime numbers.
Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
*/
((num) => {
  function primeDivisors() {
    let array = [];
    for (let i = 1; i <= num; i++) {
      let counter = 0;
      if (num % i == 0) {
        for (let j = 1; j <= i; j++) {
          if (i % j == 0) {
            counter++;
          }
        }
        if (counter < 3) {
          array.push(i);
        }
      }
    }
    return array;
  }
  console.log(primeDivisors());
})(511);
