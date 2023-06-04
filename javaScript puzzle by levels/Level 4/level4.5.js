/*
Level 4.5 of the JavaScript problem book
#1
Given a variable with a string. Check that this string is a number, that is, it consists of numbers only.
Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
*/
((string) => {
  function numbers() {
    if (isNaN(Number(string))) {
      return "The string contains letters or special characters";
    } else {
      return "The string contains only numbers";
    }
  }
  console.log(numbers());
})("205063");
/*
#2
Given a variable with a string. Check that this string represents a fraction.
Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
*/
((string) => {
  console.log(/^\d+\/\d+$/.test(string));
})("2053/20000");
/*
No. 3
Make a function that takes an array of numbers as a parameter and returns the second largest number.
Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
*/
((array) => {
  let newArray = array.sort();
  console.log(newArray[newArray.length - 1]);
})([1, 54, 5, 73, 3, 767, 65, 4, 54, 5, 45, 45, 7, 78, 89, 5]);
/*
#4
Make a function that will take two numbers as parameters and return an array filled with integers from the minimum parameter to the maximum.
Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
*/
((min, max) => {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  console.log(array);
})(5, 40);
/*
#5
Make a function that will fill the array with random Latin letters.
Сделайте функцию, которая заполнит массив случайными латинскими буквами.
*/
(() => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(
      String.fromCharCode(Number.parseInt(Math.random() * (122 - 97) + 97))
    );
  }
  console.log(array);
})();
/*
#6
Make a function that will return the sum of the first N Fibonacci numbers.
Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
*/
((N) => {
  if (N <= 0) {
    console.log(0);
  }
  let current = 1;
  let prev = 0;
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += current;
    let next = current + prev;
    prev = current;
    current = next;
  }
  console.log(sum);
})(10);
