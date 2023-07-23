/*
Level 3.5 of the JavaScript problem book
#1
Text with words. Write to the array all the words that start with the letter 'a'.
Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
*/
((string) => {
  console.log(string.match(/\b[aA]\w+/g));
})("Abracadabra hellow word antow");
/*
#2
Given an array of numbers. Leave in it only those numbers that are divisible by 5.
Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
*/
((array) => {
  console.log(array.filter((elem) => elem % 5 == 0));
})([5, 10, 3, 7, 15, 9, 8]);
/*
No. 3
Given an array of numbers. Leave in it only those numbers that contain the digit zero.
Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
*/
((array) => {
  console.log(array.filter((elem) => /0/g.test(elem)));
})([5, 10, 3, 70, 15, 9, 8, 0]);
/*
#4
Given an array of numbers. Check that it contains a number containing the number 3.
Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
*/
((array) => {
  console.log(array.filter((elem) => /3/g.test(elem)));
})([5, 10, 3, 70, 15, 93, 8, 0]);
/*
#5
Given a number:
35142
Sort the digits of this number. In our case, it should look like this:
12345
Дано некоторое число:
35142
Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
12345
*/
((num) => {
  console.log(Array.from(num.toString(), Number).sort().join(""));
})(35142);
/*
#6
Write a program that will generate the following line:
'-1-2-3-4-5-'
Напишите программу, которая сформирует следующую строку:
'-1-2-3-4-5-'
*/
(() => {
  let word = "";
  for (let i = 1; i <= 5; i++) {
    word = word + "-" + i;
  }
  word = word + "-";
  console.log(word);
})();
/*
#7
Given the following object:
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
Find the sum of the elements of this object.
Дан следующий объект:
Найдите сумму элементов этого объекта.
*/
(() => {
  let obj = {
    1: {
      1: {
        1: 111,
        2: 112,
        3: 113,
      },
      2: {
        1: 121,
        2: 122,
        3: 123,
      },
    },
    2: {
      1: {
        1: 211,
        2: 212,
        3: 213,
      },
      2: {
        1: 221,
        2: 222,
        3: 223,
      },
    },
    3: {
      1: {
        1: 311,
        2: 312,
        3: 313,
      },
      2: {
        1: 321,
        2: 322,
        3: 323,
      },
    },
  };
  let sum = 0;
  for (let key in obj) {
    let subObj = obj[key];

    for (let subKey in subObj) {
      let sub2Obj = subObj[subKey];

      for (let sub2Key in sub2Obj) {
        sum += sub2Obj[sub2Key];
      }
    }
  }
  console.log(sum);
})();
