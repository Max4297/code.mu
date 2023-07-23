/*
Level 5.5 of the JavaScript problem book
#1
Given an input, a button, and three paragraphs. The date is entered in the input in the format 2025-12-31. On pressing the button, display the year in the first paragraph, the month in the second paragraph, and the third day.
Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. 
По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.
*/
(() => {
  let input = document.querySelector("#first input");
  let button = document.querySelector("#first button");
  let paragraphs = document.querySelectorAll("#first p");

  button.addEventListener("click", () => {
    let array = input.value.split("-");
    for (let i = 0; i < array.length; i++) {
      paragraphs[i].textContent = array[i];
    }
  });
})();
/*
#2
Given two inputs and a button. Numbers are entered into the inputs. By pressing the button, fill the array with integers from the first entered number to the last one.
Даны два инпута и кнопка. В инпуты вводятся числа. 
По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
*/
(() => {
  let button = document.querySelector("#second button");
  let array = [];
  button.addEventListener("click", () => {
    let min = Number(document.querySelector("#second #minInput").value);
    let max = Number(document.querySelector("#second #maxInput").value);
    for (let i = min; i <= max; i++) {
      array.push(i);
    }
    console.log(array);
  });
})();
/*
#3
Given an input, a paragraph, and a button. A string is entered into the input. On pressing the button, display the last character of the entered line in the paragraph.
Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.
*/
(() => {
  let button = document.querySelector("#third button");
  let p = document.querySelector("#third p");

  button.addEventListener("click", () => {
    let input = document.querySelector("#third input").value;
    p.textContent = input[input.length - 1];
  });
})();
/*
#4
A paragraph is given in which the number 1 is written. By pressing the button, increase the number in the paragraph by one.
Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.
*/
(() => {
  let button = document.querySelector("#fourth button");
  let p = document.querySelector("#fourth p");

  button.addEventListener("click", () => {
    p.textContent = Number(p.textContent) + 1;
  });
})();
/*
#5
Given an input and a paragraph. A string with words is entered into the input. When focus is lost, print the number of words in the input line into a paragraph.
Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.
*/
(() => {
  let p = document.querySelector("#fifth p");
  let input = document.querySelector("#fifth input");

  input.addEventListener("blur", function () {
    p.textContent = this.value.split(" ").length;
  });
})();
