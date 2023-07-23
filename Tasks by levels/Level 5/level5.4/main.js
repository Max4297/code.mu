/*
Level 5.4 of the JavaScript problem book
#1
Given paragraphs with text. Make it so that when you click on any paragraph, its text becomes the value '!'.
Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.
*/
(() => {
  let paragraphs = document.querySelectorAll("#first p");

  for (let p of paragraphs) {
    p.addEventListener("click", () => {
      p.textContent = "!";
    });
  }
})();
/*
#2
Links and a button are given. On button click, get an array of href attributes of links.
Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.
*/
(() => {
  let button = document.querySelector("#second button");
  let array = [];

  button.addEventListener("click", () => {
    let links = document.querySelectorAll("#second a");
    for (let link of links) {
      array.push(link.attributes["href"].value);
    }
    console.log(array);
  });
})();
/*
#3
Given a paragraph and a button. On button click, loop the string '123456789' and write it into a paragraph.
Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.
*/
(() => {
  let button = document.querySelector("#third button");
  let paragraph = document.querySelector("#third p");

  button.addEventListener("click", function () {
    for (let i = 1; i < 10; i++) {
      paragraph.textContent += i;
    }
  });
})();
/*
#4
There are three paragraphs. Print the current year in the first, the current month in the second, and the current day in the third.
Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.
*/
(() => {
  let button = document.querySelector("#fourth button");
  let paragraphs = document.querySelectorAll("#fourth p");
  let date = new Date();
  button.addEventListener("click", function () {
    paragraphs[0].textContent = "Year:" + date.getFullYear();
    paragraphs[1].textContent = "Month:" + date.getMonth() + 1;
    paragraphs[2].textContent = "Day:" + date.getDate();
  });
})();
/*
#5
Given a link, a paragraph and a button. On button click, write the href of the link into the text of the paragraph.
Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.
*/
(() => {
  let button = document.querySelector("#fifth button");
  let link = document.querySelector("#fifth a");
  let p = document.querySelector("#fifth p");

  button.addEventListener("click", () => {
    p.textContent = link.attributes["href"].value;
  });
})();
