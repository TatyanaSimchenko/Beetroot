"use strict";

const num = prompt("Enter number from 0 to 9");

const symbols = ["~", "!", "#", "$", "%", "^", "&", "*", "("];
const idx = Number(num);
 
if (!isNaN(num)) {
  alert(`Your symbol is "${symbols[idx]}"`);
} else {
  alert(`Enter valid number`);
}

