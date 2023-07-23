let tabs = document.querySelectorAll(".tab");

tabs.forEach((elem) => {
  elem.addEventListener("click", function () {
    tabs.forEach((elem) => elem.classList.remove("active"));
    this.classList.add("active");
  });
});
