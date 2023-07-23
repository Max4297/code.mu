"use sctrict";

// Определяем переменные
let field = document.querySelector("#field");
let message = document.querySelector("#message");
let checkbox = document.querySelector("#inputPC");
let cities = [];
let previousWord;
let allCities = [
  "Алушта",
  "Киев",
  "Кировоград",
  "Рим",
  "Винница",
  "Черкассы",
  "Днепр",
  "Чернигов",
  "Рига",
  "Берлин",
  "Вашингтон",
  "Мадрид",
  "Париж",
];

//Создаем функциональное выражение для одного игрока
let onePlayers = function () {
  let newWord = field.value; // Определяем переменную newWord
  if (allCities.includes(newWord)) {
    // Проверяем есть ли слово которое введено пользователем, в массиве ПК
    if (cities.length == 0) {
      // Проверяем первое ли это слово
      cities.push(newWord); // добавляем новое слово в массив
      pcWord(newWord); // Выполняем функцию pcWord
    } else if (
      // Проверяем чтобы слово начиналось с последей буквы предыдущего и не повторялось
      cities[cities.length - 1].endsWith(newWord[0].toLocaleLowerCase()) ==
        true &&
      cities.includes(newWord) == false
    ) {
      cities.push(newWord); // добавляем новое слово в массив
      pcWord(cities[cities.length - 1]); // Выполняем функцию pcWord
    } else {
      message.innerHTML =
        `Введите правильное слово или Вы проиграли. </br> Города которые уже были указаны: ` +
        cities; // Выводим результат в див, если слово введено не верно
    }
  } else {
    message.innerHTML =
      `Такого города нет в списке, введите другое </br> Города которые уже были указаны: ` +
      cities; // Выводим результат в див, если такого города нет в списке ПК.
  }
  this.value = ""; // Очищаем поле ввода

  //Создаем функцию для вывода слова из массива ПК
  function pcWord(previousWord) {
    // С помощю метода filter фильтруем массив слов ПК, чтобы остались слова которые не использовались и начинались с последней буквы предыдущего слова
    let newArray = allCities.filter(function (elem) {
      return previousWord.endsWith(elem[0].toLocaleLowerCase()) == true &&
        cities.includes(elem) == false
        ? true
        : false;
    });

    if (newArray.length == 0) {
      message.innerHTML = "Игрок выиграл!"; // Выводим в див сообщение о победе игрока, если слов у ПК не осталось.
    } else {
      cities.push(newArray[0]), (message.textContent = cities); // Добавляем слово в массив cities, продолжаем игру, выводим список введенных городов.
    }
  }
};

//Создаем функциональное выражение для двух игроков
let twoPlayers = function () {
  let newWord = field.value; // Определяем переменную newWord
  if (cities.length == 0) {
    // Проверяем первое ли это слово
    cities.push(newWord); // добавляем новое слово в массив
    message.textContent = cities; // Выводим массив слов в див
    previousWord = newWord; // Меняем значение переменной previousWord
  } else if (
    // Проверяем чтобы слово начиналось с последей буквы предыдущего и не повторялось
    previousWord.endsWith(newWord[0].toLocaleLowerCase()) == true &&
    cities.includes(newWord) == false
  ) {
    cities.push(newWord); // добавляем новое слово в массив
    message.textContent = cities; // Выводим массив слов в див
    previousWord = newWord; // Меняем значение переменной previousWord
  } else {
    message.innerHTML =
      `Введите правильное слово или Вы проиграли. </br> Города которые уже были указаны: ` +
      cities; // Выводим в див сообщение, если слово введено некорректно.
  }

  this.value = ""; // Очищаем поле ввода
};

field.addEventListener("blur", twoPlayers); // Добавляем обработчик событий на инпут

checkbox.addEventListener("click", () => {
  // Добавляем обработчик событий на checkbox
  cities = []; // очищаем масиив
  field.value = ""; // очищаем инпут
  message.textContent = ""; // очищаем див

  if (checkbox.checked) {
    // Если чекбокс выбран, убираем обратчик событий с функцией для двух игроков, ставим для одного игрока
    field.removeEventListener("blur", twoPlayers, false); // удаляем обработчик
    field.addEventListener("blur", onePlayers); // добавляем обработчик
  } else {
    field.removeEventListener("blur", onePlayers, false); // удаляем обработчик
    field.addEventListener("blur", twoPlayers); // добавляем обработчик
  }
});
