/*
Level 5.1 of the JavaScript problem book
#1
Given two inputs, a paragraph and a button. Numbers are entered into the inputs. On pressing the button, display the sum of these numbers in a paragraph.
Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.
*/
(() => {
  let paragraph = document.querySelector("#first .result");
  let input1 = document.querySelector("#input1").value;
  let input2 = document.querySelector("#input2").value;
  let button = document.querySelector("#first button");

  button.addEventListener("click", function () {
    paragraph.textContent = Number(input1) + Number(input2);
  });
})();

/*
#2
Given a paragraph with a number and a button. On clicking the button, square the text of the paragraph.
Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.
*/
(() => {
  let paragraph = document.querySelector("#second .result");
  let button = document.querySelector("#second button");

  button.addEventListener("click", function () {
    paragraph.textContent **= 2;
  });
})();
/*
#3
Given paragraphs with numbers, a paragraph and a button. By clicking on the button, find the sum of the values of the paragraphs and write it down in a paragraph.
Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
*/
(() => {
  let p = document.querySelectorAll("#third p");
  let button = document.querySelector("#third button");
  button.addEventListener("click", function () {
    let length = p.length - 1;
    for (let i = 0; i < length; i++) {
      let elem = +p[i].textContent;
      p[length].textContent = +p[length].textContent + elem;
    }
  });
})();
/*
#4
Given paragraphs with numbers. Make it so that when you click on any paragraph, its value is squared.
Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.
*/
(() => {
  let paragraphs = document.querySelectorAll("#fourth p");

  for (const elem of paragraphs) {
    elem.addEventListener("click", function () {
      elem.textContent **= 2;
    });
  }
})();
/*
#5
Given inputs into which numbers are entered. Make it so that when focus is lost in any input, its value is squared.
Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.
*/
(() => {
  let inputs = document.querySelectorAll("#fifth input");

  for (const elem of inputs) {
    elem.addEventListener("blur", function () {
      elem.value **= 2;
    });
  }
})();
