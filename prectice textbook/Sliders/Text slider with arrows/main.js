"use strict";

let texts = ["text1", "text2", "text3"];
let slider = document.querySelector("#slider");
let leftArrow = document.querySelector("#left");
let rightArrow = document.querySelector("#right");
let counter = 0;

slider.textContent = texts[counter];
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

  slider.textContent = texts[counter];
}

/// Task 2

let slider2 = document.querySelector("#slider2");
let leftArrow2 = document.querySelector("#left2");
let rightArrow2 = document.querySelector("#right2");
let counter2 = 0;

slider2.textContent = texts[counter];

leftArrow2.addEventListener("click", switchText2);
rightArrow2.addEventListener("click", switchText2);

function switchText2(event) {
  event.preventDefault();
  switch (event.target.id) {
    case "left2":
      counter2--;
      if (counter2 <= 0) {
        counter2 = 0;
      }
      break;
    case "right2":
      counter2++;
      if (counter2 == texts.length) {
        counter2 = texts.length - 1;
      }
      break;
  }

  slider2.textContent = texts[counter2];
}
