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
/*
#4
Make a function that will take a number as a parameter, and return this number in words, that is, in words.
Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.
*/
/*
#5
Make a function that takes a number as a parameter and returns an array of its divisors, which are prime numbers.
Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
*/
/*
#6
Make a function that takes a word as a parameter and returns an array of its syllables.
Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.
*/
