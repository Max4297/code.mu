/*
Level 3.1 of the JavaScript problem book
#1
Some number is given. Check that the digits of this number are in ascending order.
Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
*/
((elem) => {
  let array = Array.from(String(elem), Number);

  let res = array.reduce((accumulator, currentValue) =>
    accumulator <= currentValue
      ? (accumulator = currentValue)
      : (accumulator = "false")
  );
  console.log(
    res === "false"
      ? "числа не расположены по возрастанию"
      : "числа расположены по возрастанию"
  );
})(123456);
/*
#2
Удалите из массива все пустые строки.
Given an array:

[1, '', 2, 3, '', 5]
Remove all empty strings from the array.
Дан массив:

[1, '', 2, 3, '', 5]
*/
((elem) => {
  console.log(elem.join("").split(""));
})([1, "", 2, 3, "", 5]);
/*
No. 3
Отсортируйте элементы в каждом подмассиве.
Given an array:

[
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]
Sort the elements in each subarray.
Дан массив:

[
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]
*/
((array) => {
  console.log(
    array.map((elem) => {
      return elem.sort();
    })
  );
})([
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
]);
/*
#4
Given two arrays:

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Remove extra elements from the end of the larger array so that the lengths of the arrays become the same.
Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
*/
(() => {
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3, 4, 5];
  arr2.splice(arr1.length, arr2.length - arr1.length);
  console.log(arr2);
})();
