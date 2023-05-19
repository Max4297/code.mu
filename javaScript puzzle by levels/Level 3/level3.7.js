/*
Level 3.7 of the JavaScript problem book
#1
Given a line with words. 
Sort the words alphabetically.
Дана строка со словами. 
Отсортируйте слова в алфавитном порядке.
*/
((string) => {
  console.log(string.split(" ").sort().join(" "));
})("b word how a you");
/*
#2
Given a number. Get an array of divisors of this number.
Дано число. Получите массив делителей этого числа.
*/
((num) => {
  let array = [];
  for (let i = num; i >= 1; i--) {
    if (num % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
})(40);
/*
№3
Two numbers are given. Get an array of common divisors of these numbers.
Даны два числа. Получите массив общих делителей этих чисел.
*/
((num1, num2) => {
  let min = Math.min(num1, num2);
  let array = [];
  for (let i = min; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      array.push(i);
    }
  }
  console.log(array);
})(9, 21);
/*
#4
Given a number. Check that this number has only one divisor besides itself and one.
Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
*/
((num) => {
  let array = [];
  for (let i = num; i >= 1; i--) {
    if (num % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
  if (array.length < 3 || array.length > 3) {
    console.log(
      "У числа делителей больше одного или меньше одного, кроме числа 1 и самого себя"
    );
  } else {
    console.log("У числа только один делитель кроме 1 и самого себя");
  }
})(9);
/*
#5
Numbers are written separated by commas. Get the maximum of these numbers.
Через запятую написаны числа. Получите максимальное из этих чисел.
*/
((...rest) => {
  console.log(Math.max(...rest));
})(9, 67, 4, 3, 1, 100);
/*
#6
Given an array of numbers. After each single-digit number, insert another one of the same.
Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
*/
((array) => {
  let newArray = [];
  array.forEach((elem) => {
    newArray.push(elem);
    if (elem / 10 < 1 || elem == 0) {
      newArray.push(elem);
    }
  });
  console.log(newArray);
})([9, 67, 4, 3, 1, 100, 0]);
/*
#7
Given a line. Remove all vowels from it.
Дана строка. Удалите из нее все гласные буквы.
*/
((str) => {
  console.log(str.replace(/[aeiouy]/g, ""));
})("Given a line. Remove all vowels from it.");
/*
#8
Given a line. Capitalize the last letter of every word on this line.
Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
*/
((str) => {
  console.log(
    str.replace(/\S(\s|\.)/g, function (a) {
      return a.toUpperCase();
    })
  );
})("Given a line. Remove all vowels from it.");
/*
#9
Given the following structure:
Find the sum of the elements of this structure.
Дан следующая структура:
Найдите сумму элементов этой структуры.
let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
*/
