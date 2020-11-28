"use strict";

// let day = prompt(`Введите день`);
// let month = prompt(`Введите месяц`);
// let year = prompt(`Введите год`,);

// if ( (day == 31)||(day == 30 && month == 4 || month == 6 || month == 9 || month == 11)||(day == 28 && month == 2 && !((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) )||(day == 29 && month == 2) ) {
//     day = 1;
//     if (month != 12) month += 1;
//     else {
//     month = 1;
//     year += 1;
//     };
// }
// else day += 1;  
// alert(`${day}.${month}.${year}`);


let Day = prompt("Укажите день");
let Month = prompt("Укажите месяц");
let Year = prompt("Укажите год");
let date = new Date(
  Number(Year),
  Number(Month - 1),
  Number(Day) + 1
);
alert(
  date.toLocaleString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);