"use strict";

let texts = ["1.jpg", "2.jpg", "3.jpg"];

let slider = document.querySelector("#slider");
let leftArrow = document.querySelector("#left");
let rightArrow = document.querySelector("#right");
let counter = 0;

setInterval(timer, 5000);

function timer() {
  slider.setAttribute("src", "images/" + texts[counter]);
  counter++;

  if (counter == texts.length) {
    counter = 0;
  }
}

leftArrow.addEventListener("click", switchText);
rightArrow.addEventListener("click", switchText);

function switchText(event) {
  event.preventDefault();

  switch (event.target.id) {
    case "left":
      counter--;
      break;
    case "right":
      counter++;
      break;
  }
  if (counter == texts.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = texts.length - 1;
  }

  slider.setAttribute("src", "images/" + texts[counter]);
}
