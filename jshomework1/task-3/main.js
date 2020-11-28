"use strict";

let number = prompt(`Введите трехзначное число.`);

 number = number + '';
if (number[0] === number[1] || number[0] === number[2] ||
  number[1] === number[2]) {
    alert(`Есть одинаковые цифры :-) !`);
  } else {
    alert(`Совпадений нет :-( !`);
  }