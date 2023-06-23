/*
Level 5.9 of the JavaScript problem book
#1
Given an array with numbers, a button and an input. By pressing the button, write down all the numbers from the array into the input, separating them with commas.
Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.
*/
(() => {
  let array = [9, 3, 2, 3, 5, 3, 2];
  let input = document.querySelector("#first input");
  let button = document.querySelector("#first button");

  button.addEventListener("click", () => {
    input.value = array.join(",");
  });
})();
/*
#2
Given paragraphs with text. Make it so that when you click on any paragraph, its text is painted red.
Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.
*/
(() => {
  let paragraphs = document.querySelectorAll("#second p");

  for (const p of paragraphs) {
    p.addEventListener("click", function () {
      this.style.color = "red";
    });
  }
})();
/*
#3
Input given. A number is entered into it. If an odd number is entered, then color the input border in red, and if it is even, then in green.
Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
*/
(() => {
  let input = document.querySelector("#third input");

  input.addEventListener("blur", function () {
    this.style.borderColor = this.value % 2 == 0 ? "green" : "red";
  });
})();
/*
#4
The date is entered in the input in the format 2025-12-31. After losing focus, make sure that the date in the input is in the format 12/35/2025.
В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025.
*/
(() => {
  let input = document.querySelector("#fourth input");

  input.addEventListener("blur", function () {
    this.value = this.value.split("-").reverse().join(".");
  });
})();
/*
#5
Given an empty list of ul and textarea. It contains text with punctuation marks. When you lose focus, write each sentence from the text in your li tag.
Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li.
*/
(() => {
  let textarea = document.querySelector("#fifth textarea");
  let ul = document.querySelector("#fifth ul");

  textarea.addEventListener("blur", function () {
    let array = this.value.match(/[^.!?]+[.!?]+/g);
    console.log(array);
    for (const elem of array) {
      let li = document.createElement("li");
      li.textContent = elem;
      ul.appendChild(li);
    }
  });
})();
