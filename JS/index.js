// Задание 1

let name = prompt("Введите имя");
let age = prompt("Сколько вам лет ?");

if (age < 18) {
  alert("Доступ запрещен");
} else if (age >= 18) {
  alert("Доступ разрешен");
} else {
  alert("Вы ничего не ввели");
}

// Задание 2

while (true) {
  let login = prompt("Введите логин");

  if (login === null) {
    break;
  }

  login = login.toLowerCase(); // преобразование строк в нижний регистр (Заглавные буквы в маленькие)

  if (login === "") {
    alert("You are not correct");
  } else if (login === "student") {
    alert("Welcome!");
    break;
  } else {
    alert("Wrong login !");
  }
}

// Задание 3

let numOne = prompt("Введите первое число");

if (numOne === "") {
  alert("Вы ничего не ввели");
} else if (numOne === null) {
  alert("Вы вышли");
} else {
  let numOnePars = parseFloat(parseInt(numOne));

  let numTwo = prompt("Введите второе число");
  if (numTwo === "") {
    alert("Вы ничего не ввели");
  } else if (numTwo === null) {
    alert("Вы вышли");
  } else {
    let numTwoPars = parseFloat(parseInt(numTwo));
  }

  let resultOne = parseFloat(prompt(`Сколько будет ${numOne} * ${numTwo} ?`));

  if (resultOne === numOne * numTwo) {
    alert("Все верно !");
  } else {
    alert("Ответ неверный !");
  }

  let resultTwo = parseFloat(prompt(`Сколько будет ${numOne} / ${numTwo} ?`));

  if (resultTwo === numOne / numTwo) {
    alert("Все верно !");
  } else if (resultTwo === 0) {
    alert("На ноль делить нельзя !");
  } else {
    alert("Ответ неверный !");
  }

  let resultThree = parseFloat(prompt(`Сколько будет ${numOne} + ${numTwo} ?`));

  if (resultThree === numOne + numTwo) {
    alert("Все верно !");
  } else {
    alert("Ответ неверный !");
  }

  let resultFour = parseFloat(prompt(`Сколько будет ${numOne} - ${numTwo} ?`));

  if (resultFour === numOne - numTwo) {
    alert("Все верно !");
  } else {
    alert("Ответ неверный !");
  }
}

// Задание 4

const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерирую рандомное число от 1 до 10

let attempts = 3; // Кол-во попыток 3

// Цикл, который будет рабоать пока 3 попытки не закончатся

while (attempts > 0) {
  let userNumber = Number(prompt("Угадай число от 1 до 10")); // С помощью намбер преобразую строку в число

  if (userNumber === randomNumber) {
    alert("You win!");
    break; // При угадывании числа завершаю цикл
  } else {
    attempts--; // Уменьшаю кол-во попыток

    if (attempts === 0) {
      alert("Ты проиграл!"); // Попытки закончились
      alert(`Правильный ответ: ${randomNumber}`); // При неугадывании показываю правильный ответ
    } else {
      alert("Попробуй еще!"); // Попытки еще не закончились
    }
  }
}
