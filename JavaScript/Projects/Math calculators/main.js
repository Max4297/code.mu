"use strict";
/*
JavaScript math calculators
#1 Write a script that will find the roots of a quadratic equation. To do this, make 3 inputs into which the coefficients of the equation will be entered.
Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.*/
let inputs1 = document.querySelectorAll("#first input");
let button1 = document.querySelector("#button1");
let paragraph1 = document.querySelector("#paragraph");

button1.addEventListener("click", function () {
  let a = inputs1[0].value;
  let b = inputs1[1].value;
  let c = inputs1[2].value;
  let discriminantRoot = Math.sqrt(b * b - 4 * a * c);
  let x1 = (-b + discriminantRoot) / (2 * a);
  let x2 = (-b - discriminantRoot) / (2 * a);
  paragraph1.textContent = `x1 = ${x1}, x2 = ${x2}`;
});
/*
#2 Given 3 inputs. They enter numbers. Check that these numbers are a Pythagorean triple: the square of the largest number must be equal to the sum of the squares of the other two.
Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
 */
let inputs2 = document.querySelectorAll("#second input");
let button2 = document.querySelector("#button2");
let paragraph2 = document.querySelector("#paragraph2");

button2.addEventListener("click", function () {
  let a = Number(inputs2[0].value);
  let b = Number(inputs2[1].value);
  let c = Number(inputs2[2].value);

  if (a + b == c || c + b == a || a + c == b) {
    paragraph2.textContent = "Числа являются тройкой Пифагора";
    console.log(a, b, c);
  } else {
    paragraph2.textContent = "Числа не являются тройкой Пифагора";
  }
});

/*
#3 Given an input and a button. A number is entered into the input. By pressing the button, display the list of divisors of this number.
Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
 */
let input3 = document.querySelector("#third input");
let button3 = document.querySelector("#button3");
let paragraph3 = document.querySelector("#paragraph3");

button3.addEventListener("click", function () {
  let num = input3.value;
  let word = new String();
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      word += i + ",";
    }
  }
  paragraph3.textContent = word.slice(0, word.length - 1);
});
/*
#4 Given 2 inputs and a button. Numbers are entered into the inputs. On clicking the button, display a list of common divisors of these two numbers.
Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
*/
let inputs4 = document.querySelectorAll("#fourth input");
let button4 = document.querySelector("#button4");
let paragraph4 = document.querySelector("#paragraph4");

button4.addEventListener("click", function () {
  let word = new String();
  let num1 = inputs4[0].value;
  let num2 = inputs4[1].value;
  let min = Math.min(num1, num2);
  for (let i = 2; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      word += i + ",";
    }
  }
  paragraph4.textContent = word.slice(0, word.length - 1);
});
/*
#5 Given 2 inputs and a button. Numbers are entered into the inputs. By pressing the button print the greatest common divisor of these two numbers.
Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
*/
let inputs5 = document.querySelectorAll("#fifth input");
let button5 = document.querySelector("#button5");
let paragraph5 = document.querySelector("#paragraph5");

button5.addEventListener("click", function () {
  let num1 = inputs5[0].value;
  let num2 = inputs5[1].value;
  let min = Math.min(num1, num2);
  for (let i = min; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      paragraph5.textContent = i;
      break;
    }
  }
});
/*
#6 Given 2 inputs and a button. Numbers are entered into the inputs. On pressing the button, output the smallest number that is divisible by both one and the second of the entered numbers.
Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
*/
let inputs6 = document.querySelectorAll("#sixth input");
let button6 = document.querySelector("#button6");
let paragraph6 = document.querySelector("#paragraph6");

button6.addEventListener("click", function () {
  let num1 = inputs6[0].value;
  let num2 = inputs6[1].value;
  let min = Math.min(num1, num2);
  for (let i = 2; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      paragraph6.textContent = i;
      break;
    }
  }
});
