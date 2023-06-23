/*
Level 5.10 of the JavaScript problem book
#1
Input given. A number is entered into it. If an odd number is entered, then color the input border in red, and if it is even, then in green.
Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
*/
(() => {
  let input = document.querySelector("#first input");

  input.addEventListener("blur", function () {
    this.style.borderColor = this.value % 2 == 0 ? "green" : "red";
  });
})();
/*
#2
Given an array with numbers and a button. On clicking the button, add a random number to the array and output the array to the console.
Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.
*/
(() => {
  let array = [9, 3, 4, 5, 2, 1, 2, 2];
  let button = document.querySelector("#second button");

  button.addEventListener("click", () => {
    array.push(random());
    console.log(array);
  });
  function random(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})();
/*
#3
Given an array with color names. Given paragraphs with text. Make it so that when you click on any paragraph, its text is painted in a random color from the array.
Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.
*/
(() => {
  let array = ["blue", "red", "yellow", "green", "gray"];
  let paragraphs = document.querySelectorAll("#third p");

  for (const p of paragraphs) {
    p.addEventListener("click", () => {
      p.style.color = array[random()];
    });
  }
  function random(min = 0, max = array.length) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})();
/*
#4
Given an array with numbers, a button and a paragraph. Make it so that when you click on the button, even numbers from this array are displayed in the input separated by commas.
Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.
*/
(() => {
  let array = [9, 3, 4, 5, 2, 1, 2, 2, 100, 500, 100000];
  let p = document.querySelector("#fourth p");
  let button = document.querySelector("#fourth button");

  button.addEventListener("click", () => {
    p.textContent = array.filter((elem) => elem % 2 == 0).join(",");
  });
})();
/*
#5
Given a button and a div. By pressing the button print how many days are left until the New Year.
Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.
*/
(() => {
  let button = document.querySelector("#fifth button");
  let div = document.querySelector("#fifth div");
  button.addEventListener("click", () => {
    let date = new Date();
    let lastDayYear = new Date(date.getFullYear(), 11, 31);
    let daysToNewYear = Math.ceil((lastDayYear - date) / 60 / 60 / 24 / 1000);
    div.textContent = daysToNewYear;
  });
})();
/*
#6
Given a button and ul. By clicking on the button, display a list of all years for a hundred years ago and forward.
Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.
*/
(() => {
  let button = document.querySelector("#sixth button");
  let ul = document.querySelector("#sixth ul");

  let date = new Date();

  button.addEventListener("click", () => {
    for (let i = date.getFullYear() - 100; i <= date.getFullYear() + 100; i++) {
      let li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    }
  });
})();
