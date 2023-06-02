/*
Level 4.3 of the JavaScript problem book
#1
Make a function that will take an array as a parameter and remove all duplicates from it.
Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
*/
((array) => {
  function deleteDouble() {
    let set = new Set(array);
    return [...set];
  }
  console.log(deleteDouble());
})([5, 0, 9, 8, 9, 0, 7, 9, 0, 7, 8]);
/*
#2
Make a function that will take an array as a parameter and remove from it all duplicates that occur more than three times.
Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
*/
/*
No. 3
Make a function that will take an array as a parameter and remove identical, adjacent elements from it.
Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
*/

/*
#4
Make a function that will take an array of numbers as a parameter and return the maximum and minimum value from this array as the following object:
Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
{
max: 9
min: 1
}
*/
((array) => {
  function minMax() {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return { max: max, min: min };
  }
  console.log(minMax());
})([5, 0, 9, 8, 9, 0, 7, 9, 0, 7, 8, 0, 90, 8, 8, 8]);
