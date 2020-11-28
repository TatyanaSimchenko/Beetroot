"use strict";

let age = prompt(`Введите свой возраст!`);

switch (true) {
  case Number(age) > 0 && Number(age) <= 12:
    alert(`Вы ребенок.`);
    break;

  case Number(age) > 12 && Number(age) <= 18:
    alert(`Вы подросток.`);
    break;

  case Number(age) > 18 && Number(age) <= 60:
    alert(`Вы взрослый человек.`);
    break;
  case Number(age) > 60:
    alert(`Вы пенсионер.`);
    break;
  
  default:
    alert(`Enter your age, please!`);
    break;
}
