/*
Level 5.7 of the JavaScript problem book
#1
Given li tags with numbers, an input and a button. By pressing the button, find the sum of the numbers and output them to the input.
Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.
*/
(() => {
  let li = document.querySelectorAll("#first li");
  let button = document.querySelector("#first button");
  let input = document.querySelector("#first input");

  button.addEventListener("click", () => {
    let sum = 0;
    li.forEach((elem) => {
      sum += Number(elem.textContent);
    });
    input.value = sum;
  });
})();
/*
#2
Given li tags with numbers and a button. On button click increase all numbers in li tags by one.
Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.
*/
(() => {
  let li = document.querySelectorAll("#second li");
  let button = document.querySelector("#second button");

  button.addEventListener("click", () => {
    li.forEach((elem) => {
      elem.textContent = Number(elem.textContent) + 1;
    });
  });
})();
/*
#3
Given an input, a paragraph, and a button. A number is entered into the input. On clicking the button, get an array of number divisors and output them in a paragraph separated by commas.
Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.
*/
(() => {
  let p = document.querySelector("#third p");
  let button = document.querySelector("#third button");
  let input = document.querySelector("#third input");

  button.addEventListener("click", () => {
    let num = Number(input.value);
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        if (i == num) {
          return (p.textContent = p.textContent + `${i}`);
        }
        p.textContent = p.textContent + `${i},`;
      }
    }
  });
})();
/*
#4
Given paragraphs with text. Make it so that when you click on any paragraph, its text turns over.
Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.
*/
(() => {
  let paragraphs = document.querySelectorAll("#fourth p");

  for (const p of paragraphs) {
    p.addEventListener("click", function () {
      this.textContent = Array.from(this.textContent).reverse().join("");
    });
  }
})();
/*
#5
Enter a 6-digit number into the input. By pressing the button, check if the sum of the first three digits is equal to the sum of the second three digits.
В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.
*/
(() => {
  let input = document.querySelector("#fifth input");
  let button = document.querySelector("#fifth button");

  button.addEventListener("click", () => {
    let array = Array.from(input.value, Number);
    let firstHalf = array[0] + array[1] + array[2];
    let secondHalf = array[3] + array[4] + array[5];
    console.log(firstHalf == secondHalf ? true : false);
  });
})();
