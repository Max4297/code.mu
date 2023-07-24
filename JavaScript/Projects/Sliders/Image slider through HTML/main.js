"use strict";

let slider = document.querySelector("#slider");
let counter = 0;

let images = document.querySelectorAll("#slider > img");

setInterval(timer, 1000);

for (const img of images) {
  img.classList.add("images--disable");
}

function timer() {
  switch (counter) {
    case 0:
      images[counter].classList.remove("images--disable");
      counter++;
      return;
    case 3:
      images[counter - 1].classList.add("images--disable");
      counter = 0;
      images[counter].classList.remove("images--disable");
      return;
  }
  images[counter].classList.remove("images--disable");
  images[counter].previousElementSibling.classList.add("images--disable");
  counter++;
}
