"use strict";

let rows = 3;
let cols = 3;
let colors = ["red", "green", "blue"];
let table = document.querySelector("#field");
let counter = document.querySelector("#counter");

function randColor(colors) {
  return parseInt(Math.random() * 3 + 1) - 1;
}

function checkWin(indexColor) {
  let cells = table.querySelectorAll("." + colors[indexColor]);
  if (cells.length == 9) {
    alert("win");
  }
}

function createCells() {
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      let indexColor = randColor(colors);
      td.classList.add(colors[indexColor]);

      td.addEventListener("click", function changeColor() {
        counter.textContent = Number(counter.textContent) + 1;
        this.classList.remove(colors[indexColor]);
        if (indexColor == colors.length - 1) {
          indexColor = 0;
        } else {
          indexColor++;
        }
        this.classList.add(colors[indexColor]);
        checkWin(indexColor);
      });
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

createCells();
