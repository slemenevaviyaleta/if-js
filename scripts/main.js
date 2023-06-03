let user = "John Doe";
console.log(user);

let student = "Viyaleta";
console.log(student);

user = student;
//Viyaleta
console.log(user);

let test = 1;
test++;
test += "1";
//11
console.log(test);
test--;
//10
console.log(test);

test = Boolean(test);
console.log(test);

let array = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < array.length; i++) {
  result *= array[i];
  console.log(result);
}

array = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 5 && array[i] < 10) {
    console.log(array[i]);
  }
}

array = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

function palindrome(word) {
  let length = word.length;
  for (let i = 0; i < length; i++) {
    if (word[i] === word[length - 1 - i]) {
      return true;
    }
  }
  return false;
}

console.log(palindrome("шалаш"));

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(17, 10));

//function min(a,b) {
//     return(a<b)? a : b;
// }
//
// console.log(min(10,66))

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(27, 10));

//function max (a,b) {
//     return(a>b)? a : b;
// }
//
// console.log(max(1,-1))

array = [60, 19, 14, 5, 100, 67, 86, 0, 5, 90, 12];

const newArray = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element % 10 === 0) {
    newArray[i] = element / 10 + "zero";
    if (element % 100 === 0) {
      newArray[i] = element / 100 + "zero" + "zero";
    }
    if (element === 0) {
      newArray[i] = "zero";
    }
  } else {
    newArray[i] = element;
  }
}

console.log(newArray);

const text1 = document.getElementById("text1");
let i = 0;
let colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

text1.addEventListener("click", function changeColor() {
  text1.style.color = colors[i];
  i++;
  if (i >= colors.length) {
    i = 0;
  }
});

const text2 = document.getElementById("text2");
i = 0;
colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

text2.addEventListener("click", function onClick() {
  text2.style.color = colors[i];
  i++;
  if (i >= colors.length) {
    i = 0;
  }
});

const text3 = document.getElementById("text3");
i = 0;
colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

text3.addEventListener("click", function onClick() {
  text3.style.color = colors[i];
  i++;
  if (i >= colors.length) {
    i = 0;
  }
});

import { sum } from "./module.js";

console.log(sum(5)(2));
