/*
Level 4.7 of the JavaScript problem book
#1
Make a function that will take a text with words as a parameter, and return a text in which these words will be sorted alphabetically.
Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
*/
((string) => {
  let array = string.split(" ").sort().join(" ");
  console.log(array);
})(
  "Make a function that will receive a string with words as a parameter, and return an uppercase string consisting of the first letters of the words."
);
/*
#2
Make a function that takes two arrays as a parameter and returns an array of their common elements.
Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
*/
((array1, array2) => {
  let newArray1 = array1.filter((elem) => array2.includes(elem));
  let newArray2 = array2.filter((elem) => array1.includes(elem));
  let set = new Set(newArray1.concat(newArray2));
  let res = Array.from(set);
  console.log(res);
})([1, 2, 3, 4, 5, 6], [65, 23, 6, 8, 5]);
/*
No. 3
Make a function that will return a random number. A function must not return the same number twice in a row.
Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
*/
(() => {
  let prev;
  function getRandomNumber() {
    let current = Number.parseInt(Math.random() * (300 - 100) + 100);
    while (current === prev) {
      currentNumber = Number.parseInt(Math.random() * (300 - 100) + 100);
    }
    prev = current;
    return current;
  }
  console.log(getRandomNumber());
})();
/*
#4
Make a function that takes an array and an element as a parameter and returns the element following it. See example:
Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/
((array, elem) => {
  console.log(array[array.indexOf(elem) + 1]);
})([1, 2, 3, 4, 5], 2);
