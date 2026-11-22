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
