/*
Level 3.10 of the JavaScript problem book
#1
Given an array. Make sure that each element is repeated twice in it.
Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
*/
((array) => {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element);
    newArray.push(element);
  });
  console.log((array = newArray));
})([8, "fdg", 7, 4, 3, 2, "vcvbn"]);
/*
#2
Given an array and a number. Leave in the array only those numbers that are divisors of the given number.
Дан массив и число. 
Оставьте в массиве только те числа, которые являются делителями заданного числа.
*/
((array) => {
  let num = 10;
  function filterDivisors(array, number) {
    return array.filter((element) => number % element === 0);
  }
  let filteredArray = filterDivisors(array, num);
  console.log(filteredArray);
})([9, 988, 7, 15, 3, 4, 78, 5, 1, 25, 9, 98, 5]);
/*
№3
Two numbers are given. Get an array of digits that are in both one and the second number.
Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
*/
((num1, num2) => {
  function numbers(number1, number2) {
    let array1 = Array.from(number1.toLocaleString(), Number);
    let array2 = Array.from(number2.toLocaleString(), Number);
    return array1.filter((elem) => array2.includes(elem));
  }
  let array = numbers(num1, num2);
  let array3 = array
    .sort()
    .filter((elem, index, array) => elem != array[index + 1]);
  console.log(array3);
})(105053, 36450);
/*
#4
Given a number. Get an array of the position of all 3 digits in this number, except for the first and last.
Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
*/
((num1) => {
  let array = Array.from(String(num1), Number).entries();
  let newArray = [];
  for (const [key, value] of array) {
    if (value == 3) {
      newArray.push(key);
    }
  }
  newArray.shift();
  newArray.pop();
  console.log(newArray);
})(31353336);
/*
#5
Given an array of numbers. Leave in it numbers consisting of different numbers, and delete the rest.
Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
*/
((array) => {
  function func(value) {
    let array = Array.from(String(value));
    return array.every((elem) => elem == array[0]);
  }

  console.log(array.filter(func));
})([111, 4444, 5325, 554, 777, 845]);
/*
#6
Given an array:
[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
]
Merge the elements of this array into a single one-dimensional array:
Слейте элементы этого массива в один одномерный массив:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
((array) => {
  console.log(array.flat());
})([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
