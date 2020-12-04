"use strict";

let amount = prompt(`Enter purchase amount`);
let sum;

    if (amount >=200 && amount < 300) {
    sum = amount - amount*0.03; 
    alert(`Your discount 3%, purchase amount ${sum}`);
  } else if (amount >=300 && amount < 500) {
    sum = amount - amount*0.05;
    alert(`Your discount 5%, purchase amount ${sum}`);
  } else if (amount >=500) {
    sum = amount - amount*0.07;
    alert(`Your discount 7%, purchase amount ${sum}`);
  }

