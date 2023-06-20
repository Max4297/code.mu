/*
Level 5.3 of the JavaScript problem book
#1
Given a paragraph, an input and a button. A number is entered into the input. By pressing the button, display the factorial of the entered number in the paragraph.
Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.
*/
(() => {
  let button = document.querySelector("#first button");
  let input = document.querySelector("#first input");
  let p = document.querySelector("#first p");

  function factorial(n) {
    let result = 1;
    while (n) {
      result *= n--;
    }
    return result;
  }

  button.addEventListener("click", function () {
    p.textContent = factorial(input.value);
  });
})();
/*
#2
Given two inputs, a button and a paragraph. Integers are entered into the inputs. Determine which of the entered numbers is greater and output it in a paragraph.
Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.
*/
(() => {
  let inputs = document.querySelectorAll("#second input");
  let button = document.querySelector("#second button");
  let p = document.querySelector("#second p");

  button.addEventListener("click", function () {
    inputs.forEach(function (elem) {
      if (+elem.value > p.textContent) {
        p.textContent = elem.value;
      }
    });
  });
})();
/*
#3
Given a button and an input. A number is entered into the input. By pressing the button, find the sum of the digits of the entered number.
Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа в консоль.
*/
(() => {
  let input = document.querySelector("#third input");
  let button = document.querySelector("#third button");

  button.addEventListener("click", function () {
    console.log([...input.value].reduce((prev, current) => prev + +current, 0));
  });
})();
/*
#4
Given a paragraph, an input and a button. A word is entered into the input. By pressing the button, turn the word over and write it in a paragraph.
Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.
*/
(() => {
  let input = document.querySelector("#fourth input");
  let button = document.querySelector("#fourth button");
  let p = document.querySelector("#fourth p");

  button.addEventListener("click", () => {
    p.textContent = [...input.value].reverse().join("");
  });
})();
/*
#5
Given empty paragraphs and a button. By clicking on the button, fill in the paragraphs with numbers in order.
Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
*/
(() => {
  let button = document.querySelector("#fifth button");
  let paragraphs = document.querySelectorAll("#fifth p");

  button.addEventListener("click", () => {
    for (let i = 1; i <= paragraphs.length; i++) {
      paragraphs[i - 1].textContent = i;
    }
  });
})();
/*
#6
Given an input, a paragraph, and a button. A number is entered into the input. By clicking on the button, print the factorial of this number in the paragraph.
Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.
*/
(() => {
  let button = document.querySelector("#sixth button");
  let p = document.querySelector("#sixth p");
  let input = document.querySelector("#sixth input");

  button.addEventListener("click", () => {
    p.textContent = factorial(input.value);
  });

  function factorial(n) {
    let result = 1;
    while (n) {
      result *= n--;
    }
    return result;
  }
})();
