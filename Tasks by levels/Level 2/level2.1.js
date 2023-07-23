/*
Level 2.1
#1
Given a string. Find the position of the first zero in the string.
Дана некоторая строка. Найдите позицию первого нуля в строке.
*/
((string) => {
  console.log(string.indexOf("0"));
})("lk;l;ds5s0sac4dd");
/*
#2
Print to the console all numbers between 1 and 1000 whose sum of the first and second digits is five.
Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
*/
(() => {
  for (let i = 1; i <= 1000; i++) {
    let stringNum = String(i).split("");
    let sum = stringNum.reduce((a, b) => +a + +b, 0);
    if (sum == 5) {
      console.log(stringNum.join(""));
    }
  }
})();

/*
No. 3
Given an array. Remove elements with the given value from it.
Дан массив. Удалите из него элементы с заданным значением.
*/
((elem) => {
  let array = [4, 6, 7, 5, 7, 8, 6];

  for (let i = 0; i < array.length; i++) {
    let num = array.indexOf(elem);
    if (num > -1) {
      array.splice(num, 1);
    } else {
      break;
    }
  }
  console.log(array);
})(5);

/*
#4
Given an array, for example, this one:

[1, 2, 3, 4, 5, 6]
Find the sum of the first half of the elements of this array.

Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Найдите сумму первой половины элементов этого массива.
*/
((array) => {
  let sum = 0;
  for (let i = 0; i < array.length / 2; i++) {
    sum += array[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6]);
