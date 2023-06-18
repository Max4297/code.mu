/*
Level 5.2 of the JavaScript problem book
#1
Given a paragraph and a button. By pressing the button, find the sum of numbers from 1 to 100 and write the result in a paragraph.
Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
*/
(() => {
  let button = document.querySelector("#first button");
  let p = document.querySelector("#first p");

  button.addEventListener("click", function () {
    p.textContent = (100 * (100 + 1)) / 2;
  });
})();
/*
#2
Given a button and two inputs. Numbers are entered into the inputs. By pressing the button, find the sum of the entered numbers.
Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел. Резултат вывести к консоль.
*/
(() => {
  let button = document.querySelector("#second button");
  let inputs = document.querySelectorAll("#second input");
  let sum = 0;

  button.addEventListener("click", function () {
    for (const input of inputs) {
      sum += +input.value;
    }
    console.log(sum);
    sum = 0;
  });
})();
/*
#3
Given paragraphs, a button and a div. On clicking the button, find the number of paragraphs and display this value in a div.
Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.
*/
(() => {
  let button = document.querySelector("#third button");
  let div = document.querySelector("#third div");
  div.style.width = 50 + "px";
  button.addEventListener("click", function () {
    let paragraphs = document.querySelectorAll("#third p");
    div.textContent = paragraphs.length;
  });
})();
/*
#4
Given a button and an input. A string is entered into the input. By clicking on the button, determine how many characters are in the entered string.
Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке. Резултат вывести к консоль.
*/
(() => {
  let button = document.querySelector("#fourth button");
  let input = document.querySelector("#fourth input");

  button.addEventListener("click", function () {
    console.log(input.value.split("").length);
  });
})();
