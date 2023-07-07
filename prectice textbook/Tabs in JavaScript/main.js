"use sctrict";

let links = document.querySelectorAll(".menu a");
let tabs = document.querySelectorAll(".tabs div");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((elem) => elem.classList.remove("active"));
    tabs.forEach((elem) => elem.classList.remove("active"));

    this.classList.add("active");

    tabs[parseInt(link.id.match(/\d+/)) - 1].classList.add("active");
  });
});
