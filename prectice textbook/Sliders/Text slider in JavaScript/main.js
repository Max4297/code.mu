/*
сделаем слайдер текста. Этот слайдер будет представлять собой див, в котором каждую секунду будет меняться текст:
*/
"use strict";

let texts = ["text1", "text2", "text3"];

let slider = document.querySelector("#slider");
setInterval(timer, 1000);
let counter = 0;

function timer() {
  slider.textContent = texts[counter];
  counter++;

  if (counter == texts.length) {
    counter = 0;
  }
}
