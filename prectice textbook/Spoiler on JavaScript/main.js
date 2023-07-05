"use sctrict";

let toggleButtons = document.querySelectorAll(".toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let spoiler = this.parentElement.nextElementSibling;
    spoiler.classList.toggle("active");

    if (spoiler.classList.contains("active")) {
      this.textContent = "свернуть";
    } else {
      this.textContent = "развернуть";
    }
  });
});
