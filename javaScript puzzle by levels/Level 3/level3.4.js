/*
Level 3.4 of the JavaScript problem book
#1
Print to the console all numbers between 10 and 1000 whose first digit is even.
Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
*/
(() => {
  for (let i = 10; i <= 1000; i++) {
    if (/^[02468]/.test(i)) {
      console.log(i);
    }
  }
})();
/*
#2
Given an arrayay, for example, this one:
[1, 2, 3, 4, 5, 6]
Swap pairs of elements of this arrayay:
[2, 1, 4, 3, 6, 5]
Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
Поменяйте местами пары элементов этого массива:
[2, 1, 4, 3, 6, 5]
*/
((array) => {
  for (let i = 0; i < array.length; i += 2) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  console.log(array);
})([1, 2, 3, 4, 5, 6]);
/*
No. 3
Given the following object:
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
Find the sum of the elements of this object.
Дан следующий объект:
Найдите сумму элементов этого объекта.
*/
(() => {
  let obj = {
    1: {
      1: 11,
      2: 12,
      3: 13,
    },
    2: {
      1: 21,
      2: 22,
      3: 23,
    },
    3: {
      1: 24,
      2: 25,
      3: 26,
    },
  };
  let sum = 0;
  for (let key in obj) {
    let subObj = obj[key];

    for (let subKey in subObj) {
      sum += subObj[subKey];
    }
  }
  console.log(sum);
})();
