/*
Level 1.8
#1
Fill the array with integers from 1 to 10.
Заполните массив целыми числами от 1 до 10.
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
Fill the array with even numbers from 1 to 100.
Заполните массив четными числами из промежутка от 1 до 100.
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
Given an array with fractions:
[1.456, 2.125, 3.32, 4.1, 5.34]
Round these fractions to one decimal place.
Дан массив с дробями:
[1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части.
*/
((array) => {
  let newArray = array.map((a) => a.toFixed(1));
  console.log(newArray);
})([1.456, 2.125, 3.32, 4.1, 5.34]);
