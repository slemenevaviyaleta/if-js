let user = 'John Doe';
console.log(user);

let student = 'Viyaleta';
console.log(student);

user = student;
//Viyaleta
console.log(user)

let test = 1;
test++;
test += '1';
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

console.log(palindrome('шалаш'));



function min(a,b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(17,10))

//function min(a,b) {
//     return(a<b)? a : b;
// }
//
// console.log(min(10,66))



function max(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(27,10))

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
            newArray[i]= element / 100 + "zero" + "zero";
        }
        if (element === 0) {
            newArray[i] = "zero";
        }
    } else {
        newArray[i] = element;
    }
}

console.log(newArray);


const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};


const deepEqual = (object1, object2) => {
    if (object1 === object2)
        return true;
    if ((typeof object1 !== "object") || (typeof object2 !== "object") || (object1 === null) || (object2 === null))
        return false;
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length)
        return false;
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!keys2.includes(key) || !deepEqual(object1[key], object2[key]))
            return false;
    }
    return true;
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false


















