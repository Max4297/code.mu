/*
Level 1.10

#1
Заполните массив случайными числами из промежутка от 1 до 100.
Fill the array with random numbers from 1 to 100.
*/
(() => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  console.log(getRandomIntInclusive(1, 100));
})();
/*
#2
Дано некоторое число:

12345
Выведите в консоль все его символы с конца.
Given a number:

12345
Print to the console all its characters from the end.
*/
((num) => {
  console.log(Array.from(String(num), Number).reverse().join(""));
})(12345);
/*
No. 3
Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

[1, 2]
[3, 4]
[5, 6]

Given an array, for example, this one:

[1, 2, 3, 4, 5, 6]
Print the sub-arrays of the two elements of our array to the console one by one:

[1, 2]
[3, 4]
[5, 6]
*/
((array) => {
  let count = array.length / 2;
  for (let i = 0; i < count; i++) {
    let newArray = [];
    for (let j = 0; j < 2; j++) {
      newArray.push(array[j]);
    }
    array.splice(0, 2);
    console.log(newArray);
  }
})([1, 2, 3, 4, 5, 6]);
/*
#4
Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:

[1, 2, 3, 4, 5, 6]

Given two arrays:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Merge these arrays into a new array:

[1, 2, 3, 4, 5, 6]
*/
((first, second) => {
  console.log(first.concat(second));
})([1, 2, 3], [4, 5, 6]);
