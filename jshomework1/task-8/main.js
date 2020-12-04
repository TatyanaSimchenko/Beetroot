"use strict";

const circle = prompt(`Введите длину окружности.`);
const square = prompt(`Введите периметр квадрата.`);

let d = circle / Math.PI;
let a = square / 4;
if (d <= a) {
  alert (`Окружность помещается в квадрат`);
} else {
  alert (`Окружность не помещается в квадрат`);
}

