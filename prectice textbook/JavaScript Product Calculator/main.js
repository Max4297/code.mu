"use strict";
let title = document.querySelector("#name");
let price = document.querySelector("#price");
let amount = document.querySelector("#amount");
let add = document.querySelector("#add");
let table = document.querySelector("#table");
let total = document.querySelector("#total");

function createCell(tr, value, name) {
  let td = document.createElement("td");
  td.textContent = value;
  td.classList.add(name);
  tr.appendChild(td);
  return td;
}

function recountTotal() {
  let costs = table.querySelectorAll(".cost");

  if (costs) {
    total.textContent = 0;
    costs.forEach((element) => {
      total.textContent =
        Number(total.textContent) + Number(element.textContent);
    });
  }
}

function allowEdit(td) {
  td.addEventListener("dblclick", function () {
    let input = document.createElement("input");
    input.value = this.textContent;
    this.textContent = "";
    this.appendChild(input);

    input.addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        td.textContent = this.value;

        if (td.classList.contains("price") || td.classList.contains("amount")) {
          let cost = td.parentElement.querySelector(".cost");
          let price = td.parentElement.querySelector(".price").textContent;
          let amount = td.parentElement.querySelector(".amount").textContent;
          cost.textContent = price * amount;
          recountTotal();
        }
      }
    });
  });
}

add.addEventListener("click", function () {
  let tr = document.createElement("tr");

  allowEdit(createCell(tr, title.value, "name"));
  allowEdit(createCell(tr, price.value, "price"));
  allowEdit(createCell(tr, amount.value, "amount"));
  createCell(tr, price.value * amount.value, "cost");
  createCell(tr, "удалить", "remove").addEventListener("click", function () {
    tr.remove();
    recountTotal();
  });

  table.appendChild(tr);
  recountTotal();
});
