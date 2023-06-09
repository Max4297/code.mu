/*
Level 4.8 of the JavaScript problem book
#1
Make a function that takes an array as a parameter and returns a random element of this array.
Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
*/
((array) => {
  function random(min, max) {
    return Number.parseInt(Math.random() * (max - min) + min);
  }
  console.log(array[random(0, array.length)]);
})([1, 2, 3, 4, 5]);
/*
#2
Make a function that takes an array as a parameter and returns an array of N random elements of this array.
Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
*/
((array) => {
  let newArray = [];
  function random(min = 0, max = 100) {
    return Number.parseInt(Math.random() * (max - min) + min);
  }
  for (let i = 0; i < random(); i++) {
    newArray.push(array[random(0, array.length)]);
  }
  console.log(newArray);
})([1, 2, 3, 4, 5]);
/*
No. 3
Make a function that takes an array as a parameter and returns a random element of this array so that the same elements are not returned twice in a row.
Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
*/
((array) => {
  let prev;
  function random(min = 0, max = 100) {
    return Number.parseInt(Math.random() * (max - min) + min);
  }
  function getRandomNumber() {
    let current = array[random(0, array.length)];
    while (current === prev) {
      current = array[random(0, array.length)];
    }
    prev = current;
    return current;
  }
  console.log(
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber()
  );
})([1, 2, 3, 4, 5]);
/*
#4
Make a function that will return an array of prime numbers from a given range.
Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
*/
((min, max) => {
  function simple(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        sum++;
      }
    }
    return sum == 2 ? true : false;
  }
  let array = [];
  for (let i = min; i <= max; i++) {
    if (simple(i)) {
      array.push(i);
    }
  }
  console.log(array);
})(1, 100);
/*
#5
Make a function that will take any number of parameters as parameters, and return their sum.
Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.
*/
((...rest) => {
  let array = [...rest];
  console.log(array.reduce((prev, current) => prev + current, 0));
})(1, 100, 14, 656, 654, 54, 645, 6, 546, 45, 654, 6, 45, 645, 4);
/*
#6
Make a function that will fill an array with N random numbers from a given interval so that there are no two identical numbers in a row in the array.
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
*/
((min, max, quantity) => {
  let array = [random(min, max)];
  function random(min = 0, max = 100) {
    return Number.parseInt(Math.random() * max + min);
  }
  for (let i = 1; i <= quantity; i++) {
    array[i] = random(min, max);
    while (array[i] === array[i - 1]) {
      array[i] = random(min, max);
    }
  }
  console.log(array);
})(1, 10, 10);
/*
#7
Make a function that will fill the array N with random numbers from a given interval so that the numbers do not repeat.
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
*/
((min, max, quantity) => {
  let set = new Set();
  function random(min = 0, max = 100) {
    return Number.parseInt(Math.random() * max + min);
  }
  while (set.size != quantity) {
    set.add(random(min, max));
  }
  let array = Array.from(set);
  console.log(array);
})(1, 10, 10);
