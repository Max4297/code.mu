/*
Level 3.8 of the JavaScript problem book
#1
Given an array of numbers. 
Check that all numbers from this array contain the number 3.
Дан массив со числами. 
Проверьте, что все числа из этого массива содержат в себе цифру 3.
*/
((array) => {
  array.forEach((elem) => console.log(/3/.test(elem.toLocaleString())));
})([3, 63, 83, 53, 67, 43, 66, 99, 78, 30]);
/*
#2
Given a string in the format:
'kebab case'
Convert it to the format:
'snake_case'
Дана строка в формате:
'kebab-case'
Преобразуйте ее в формат:
'snake_case'
*/
((string) => {
  console.log(string.replace(/-/, "_"));
})("kebab-case");
/*
№3
Given a string in the format:
'snake_case'
Convert it to the format:
'camelCase'
Дана строка в формате:
'snake_case'
Преобразуйте ее в формат:
'camelCase'
*/
((string) => {
  let array = string.split("_");
  array[1] = array[1].replace(/^\w/, (a) => a.toUpperCase());
  console.log(array.join(""));
})("snake_case");
/*
#4
Given a string in the format:
'camelCase'
Convert it to the format:
'snake_case'
Дана строка в формате:
'camelCase'
Преобразуйте ее в формат:
'snake_case'
*/
((string) => {
  console.log(string.replace(/[A-Z]/, (a) => "_" + a.toLocaleLowerCase()));
})("camelCase");
/*
#5
Loop through the following array:
Сформируйте с помощью циклов следующий массив:
[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
]
*/
(() => {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push([]);
    for (let j = 1; j <= 3; j++) {
      array[i].push(j);
    }
  }
  console.log(array);
})();
