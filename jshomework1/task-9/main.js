"use strict";
let result = 0;

let firstQestion = prompt(`Где живет кенгуру? 1-Азия 2-Египет 3-Австралия`);
if (firstQestion !== `3`){
  alert (`Не верно! )-:`)
} else {
  if (firstQestion == `3`) 
result += 2;
}

let secondQestion = prompt(`Кто изобрел граммофон? 1-Майнкрафт 2-Зикки Мартин 3-Эмиль Берлинер`);
if (secondQestion !== `3`){
  alert (`Не верно! )-:`)
} else {
  if (secondQestion == `3`) 
result += 2;
}

let thirdQestion = prompt(`Где находится Стоунхендж? 1-Америка 2-Индия 3-Великобритания`);
if (thirdQestion !== `3`){
  alert (`Не верно! )-:`)
} else {
  if (thirdQestion == `3`) 
result += 2;
}

alert (`Ваш результат ${result}`)

