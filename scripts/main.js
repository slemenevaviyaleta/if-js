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


let date='2020-11-26';
let reg=/(\d+)\S(\d+)\S(\d+)/;
const newDate=date.replace(reg,'$3.$2.$1')

console.log(newDate)


const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(arr) {
  let matchingStrings = [];

  const cities = [
    'Berlin',
    'Santa Cruz de Tenerife',
    'Vysokie Tatry',
    'Bali',
    'Rotterdam',
    'Ourika'
  ];

  let matchingStringsIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (cities.includes(arr[i].city)) {
      const str = `${arr[i].country}, ${arr[i].city}, ${arr[i].hotel}`;
      matchingStrings[matchingStringsIndex] = str;
      matchingStringsIndex++;
    }
  }

  return matchingStrings;
}

console.log(search(data));






