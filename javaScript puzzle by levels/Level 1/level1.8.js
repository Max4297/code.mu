/*
Level 1.8

#1
Заполните массив целыми числами от 1 до 10.
Fill the array with integers from 1 to 10.
*/
(() => {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }
  console.log(array);
})();
/*
#2
Заполните массив четными числами из промежутка от 1 до 100.
Fill the array with even numbers from 1 to 100.
*/
(() => {
  let array = [];
  for (let i = 2; i <= 100; i += 2) {
    array.push(i);
  }
  console.log(array);
})();
/*
No. 3
Дан массив с дробями:

[1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части.

Given an array with fractions:

[1.456, 2.125, 3.32, 4.1, 5.34]
Round these fractions to one decimal place.
*/
((array) => {
  let newArray = array.map((a) => a.toFixed(1));
  console.log(newArray);
})([1.456, 2.125, 3.32, 4.1, 5.34]);
