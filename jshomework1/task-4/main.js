"use strict";

const year = prompt(`Enter year! Please!`);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  alert(`Leap year )))!`);
} else {
  alert(`Not a leap year )))!`);
}


