/*
Level 5.6 of the JavaScript problem book
#1
Given an input, a button, and a paragraph. The year is entered into the input. By clicking on the button, determine whether a leap year is entered or not and display information about it in a paragraph.
Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.
*/
(() => {
  let button = document.querySelector("#first button");
  let p = document.querySelector("#first p");

  button.addEventListener("click", function () {
    let input = document.querySelector("#first input").value;

    p.textContent = input % 4 ? "false" : "true";
  });
})();
/*
#2
Given an input and a button. By pressing the button, output a random number from the range from 1 to 100 as input.
Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.
*/
(() => {
  let button = document.querySelector("#second button");

  button.addEventListener("click", function () {
    let input = document.querySelector("#second input");

    input.value = ((min = 1, max = 100) => {
      Number.parseInt(Math.random() * max + min);
    })();
  });
})();
/*
#3
Given an input, a button, and a paragraph. The date is entered in the input in the format 2025-12-31. On pressing the button, display the day of the week corresponding to this date in the paragraph.
Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31.
По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.
*/
(() => {
  let button = document.querySelector("#third button");
  let input = document.querySelector("#third input");
  let p = document.querySelector("#third p");

  button.addEventListener("click", function () {
    let date = new Date(input.value);
    p.textContent = date.getDay();
  });
})();
/*
#4
Given a div with width, height and border, and a button. By clicking on the button, double the size of the div.
Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.
*/
(() => {
  let div = document.querySelector("#fourth div");
  let button = document.querySelector("#fourth button");

  button.addEventListener("click", function () {
    console.log(div.style.width, div.style.height);
    div.style.width = parseInt(div.style.width) * 2 + "px";
    div.style.height = parseInt(div.style.height) * 2 + "px";
  });
})();
/*
#5
Links given. Make it so that when you hover over any link, the value of its href attribute appears above it.
Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.
*/
