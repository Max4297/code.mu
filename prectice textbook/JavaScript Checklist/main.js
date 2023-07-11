"use strict";

let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    let li = document.createElement("li");
    li.classList.add("list__item");

    let task = document.createElement("span");
    task.textContent = input.value;
    task.classList.add("list__item-elem");
    li.appendChild(task);

    task.addEventListener("dblclick", function () {
      let edit = document.createElement("input");
      edit.value = task.textContent;
      this.textContent = "";
      edit.classList.add("input");
      li.prepend(edit);

      edit.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
          task.textContent = edit.value;
          edit.remove();
        }
      });

      edit.addEventListener("dblclick", function () {
        this.value = "";
      });
    });

    let deleteLink = document.createElement("a");
    deleteLink.textContent = "удалить";
    deleteLink.classList.add("list__item-link");
    li.appendChild(deleteLink);

    let doneLink = document.createElement("a");
    doneLink.textContent = "сделано";
    doneLink.classList.add("list__item-link");
    li.appendChild(doneLink);

    deleteLink.addEventListener("click", function () {
      li.remove();
    });

    doneLink.addEventListener("click", function () {
      task.classList.add("list__item-link--done");
    });

    list.appendChild(li);
    this.value = "";
  }
});
