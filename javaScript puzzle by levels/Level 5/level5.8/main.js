/*
Level 5.8 of the JavaScript problem book
#1
Inputs are given. They enter numbers. Make it so that when focus is lost in any of the inputs, the square of the number entered into it appears in it.
Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.
*/
(() => {
  let inputs = document.querySelectorAll("#first input");

  for (const input of inputs) {
    input.addEventListener("blur", function () {
      this.value **= 2;
    });
  }
})();
/*
#2
Given an array, a button and an input. Make it so that when you click on the button, a random element of the array is displayed in the input.
Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.
*/
(() => {
  let inputs = document.querySelectorAll("#second input");
  let button = document.querySelector("#second button");
  let array = [5, 2, 1, 3, 56, 7, 22, 11, 33];

  button.addEventListener("click", () => {
    for (const input of inputs) {
      input.value = array[random(0, array.length)];
    }
  });
  function random(min = 0, max = array.length) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})();
/*
#3
Given an input and a paragraph. Enter numbers separated by commas. After losing focus, find the sum of the entered numbers and output it in a paragraph.
Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.
*/
(() => {
  let input = document.querySelector("#third input");
  let button = document.querySelector("#third button");
  let p = document.querySelector("#third p");

  button.addEventListener("click", () => {
    let array = input.value.split(",");
    p.textContent = array.reduce((prev, current) => prev + Number(current), 0);
  });
})();
/*
#4
Given two inputs and a button. Numbers are entered into the inputs. By pressing the button, get an array of common divisors of these numbers and output it to the console.
Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.
*/
(() => {
  let button = document.querySelector("#fourth button");

  button.addEventListener("click", () => {
    let input1 = document.querySelector("#fourth #input1").value;
    let input2 = document.querySelector("#fourth #input2").value;
    let min = Math.min(input1, input2);
    let array = [];

    for (let i = min; i >= 1; i--) {
      if (input1 % i === 0 && input2 % i === 0) {
        array.push(i);
      }
    }
    console.log(array.join(","));
  });
})();
/*
#5
Given an input and a button. Numbers are entered into the input separated by commas. By clicking on the button, check if the entered number is 13.
Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.
*/
(() => {
  let button = document.querySelector("#fifth button");
  let input = document.querySelector("#fifth input");

  button.addEventListener("click", () => {
    let array = input.value.split(",");
    console.log(array.includes("13"));
  });
})();
/*
#6
Given an input and a button. It contains a number of six digits. By clicking on the button, check that the number is a lucky ticket, that is, the sum of the first three digits is equal to the sum of the second three digits.
Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.
*/
(() => {
  let button = document.querySelector("#sixth button");
  let input = document.querySelector("#sixth input");

  button.addEventListener("click", () => {
    let array = Array.from(input.value, Number);
    let firstHalf = array[0] + array[1] + array[2];
    let secondHalf = array[3] + array[4] + array[5];
    console.log(
      firstHalf == secondHalf ? "Билет счастливый" : "Билет не счастливый"
    );
  });
})();
