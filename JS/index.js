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
