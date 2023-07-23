"use strict";

let signs = {
  Aries: {
    yesterday: "Предсказание 1 Aries",
    today: "Предсказание 2 Aries",
    tomorrow: "Предсказание 3 Aries",
  },
  Taurus: {
    yesterday: "Предсказание 1 Taurus",
    today: "Предсказание 2 Taurus",
    tomorrow: "Предсказание 3 Taurus",
  },
  Gemini: {
    yesterday: "Предсказание 1 Gemini",
    today: "Предсказание 2 Gemini",
    tomorrow: "Предсказание 3 Gemini",
  },
  Cancer: {
    yesterday: "Предсказание 1 Cancer",
    today: "Предсказание 2 Cancer",
    tomorrow: "Предсказание 3 Cancer",
  },
  Leo: {
    yesterday: "Предсказание 1 Leo",
    today: "Предсказание 2 Leo",
    tomorrow: "Предсказание 3 Leo",
  },
  Virgo: {
    yesterday: "Предсказание 1 Virgo",
    today: "Предсказание 2 Virgo",
    tomorrow: "Предсказание 3 Virgo",
  },
  Libra: {
    yesterday: "Предсказание 1 Libra",
    today: "Предсказание 2 Libra",
    tomorrow: "Предсказание 3 Libra",
  },
  Scorpio: {
    yesterday: "Предсказание 1 Scorpio",
    today: "Предсказание 2 Scorpio",
    tomorrow: "Предсказание 3 Scorpio",
  },
  Sagittarius: {
    yesterday: "Предсказание 1 Sagittarius",
    today: "Предсказание 2 Sagittarius",
    tomorrow: "Предсказание 3 Sagittarius",
  },
  Capricorn: {
    yesterday: "Предсказание 1 Capricorn",
    today: "Предсказание 2 Capricorn",
    tomorrow: "Предсказание 3 Capricorn",
  },
  Aquarius: {
    yesterday: "Предсказание 1 Aquarius",
    today: "Предсказание 2 Aquarius",
    tomorrow: "Предсказание 3 Aquarius",
  },
  Pisces: {
    yesterday: "Предсказание 1 Pisces",
    today: "Предсказание 2 Pisces",
    tomorrow: "Предсказание 3 Pisces",
  },
};

function valueResult(metka) {
  let result = document.querySelector("#result");
  let form = document.querySelector("form");
  result.textContent = signs[metka][form.elements["day"].value];
  for (const elem of form.elements["day"]) {
    elem.addEventListener("click", () => {
      valueResult(metka);
    });
  }
}

function logKey(eventKey) {
  let input = document.querySelector("#input");
  if (eventKey.key == "Enter") {
    let date = input.value.split(".").splice(0, 2).reverse().join(".");

    if (date >= "01.20" && date <= "02.18") {
      valueResult("Aquarius");
    }
    if (date >= "02.19" && date <= "03.20") {
      valueResult("Pisces");
    }
    if (date >= "03.21" && date <= "04.19") {
      valueResult("Aries");
    }
    if (date >= "04.20" && date <= "05.20") {
      valueResult("Taurus");
    }
    if (date >= "05.21" && date <= "06.20") {
      valueResult("Gemini");
    }
    if (date >= "06.21" && date <= "07.22") {
      valueResult("Cancer");
    }
    if (date >= "07.23" && date <= "08.22") {
      valueResult("Leo");
    }
    if (date >= "08.23" && date <= "09.22") {
      valueResult("Virgo");
    }
    if (date >= "09.23" && date <= "10.22") {
      valueResult("Libra");
    }
    if (date >= "10.23" && date <= "11.21") {
      valueResult("Scorpio");
    }
    if (date >= "11.22" && date <= "12.31") {
      valueResult("Sagittarius");
    }
    if (date >= "01.01" && date <= "01.19") {
      valueResult("Sagittarius");
    }
    if (date >= "12.22" && date <= "01.19") {
      valueResult("Capricorn");
    }
  }
}

input.addEventListener("keypress", logKey);
