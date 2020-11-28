"use strict";

const num = prompt('Enter uour number! Please!');
if (num === num.split('').reverse().join('')){
  alert('It is a palindrome');
} else {
  alert('It is not a palindrome');
};


