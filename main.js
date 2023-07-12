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


function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(17, 10))

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

console.log(max(27, 10))

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


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);//?????????????????
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }

    get course() {
        //const currentYear = new Date().getFullYear();?????????????
        const currentYear = 2023;
        return currentYear - this.admissionYear;
    }
}

class Students {
    constructor(studentsData) {
        this.students = studentsData.map(
            ({firstName, lastName, admissionYear, courseName}) =>
                new Student(firstName, lastName, admissionYear, courseName)
        );
    }

    getInfo() {
        const sortedStudents = this.students.sort((a, b) => a.course - b.course);//?????????
        return sortedStudents.map(
            (student) =>
                `${student.fullName} - ${student.courseName}, ${student.course} курс`
        );
    }
}

const studentsData = [
    {
        firstName: "Василий",
        lastName: "Петров",
        admissionYear: 2021,
        courseName: "Java",
    },
    {
        firstName: "Николай",
        lastName: "Петров",
        admissionYear: 2021,
        courseName: "Android",
    },
    {
        firstName: "Иван",
        lastName: "Иванов",
        admissionYear: 2020,
        courseName: "JavaScript",
    },
    {
        firstName: "Александр",
        lastName: "Федоров",
        admissionYear: 2019,
        courseName: "Python",
    },
];

const students = new Students(studentsData);
console.log(students.getInfo());

const button1 = document.querySelector('#text1');
const button2 = document.querySelector('#text2');
const button3 = document.querySelector('#text3');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    index: 0,
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {value: self.data[index++], done: false};
                } else {
                    index = 0; // Сбросить индекс на 0, чтобы начать с начала массива
                    return {value: self.data[index++], done: false};
                }
            }
        };
    }
};

const iterator = colors[Symbol.iterator]();
let currentColor = iterator.next().value;

const changeStyle = id => event => {
    event.target.style.color = currentColor;
    currentColor = iterator.next(id).value;
};


button1.addEventListener('click', changeStyle('#text1'));
button2.addEventListener('click', changeStyle('#text2'));
button3.addEventListener('click', changeStyle('#text3'));

const carousel = {
    data: [
        {
            id: '4024535d-a498-4274-b7cb-f01ada962971',
            name: 'Radisson Blu Hotel',
            city: 'Kyiv',
            country: 'Ukraine',
            imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
        },
        {
            id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
            name: 'Paradise Hotel',
            city: 'Guadalupe',
            country: 'Mexico',
            imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
        },
        {
            id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
            name: 'Hotel Grindewald',
            city: 'Interlaken',
            country: 'Switzerland',
            imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
        },
        {
            id: '190221c6-b18f-4dba-97de-e35f0e14c023',
            name: 'The Andaman Resort',
            city: 'Port Dickson',
            country: 'Malaysia',
            imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
        },
    ],
    index: 0,
    next() {
        if (this.index >= this.data.length) {
            this.done = true;
            return { done: true };
        }

        const imageUrl = this.data[this.index].imageUrl;
        this.index++;

        return { value: imageUrl, done: false };
    },
};

const carouselWrapper = document.querySelector('.favorites__carousel');
const btnEllipse = document.querySelector('.favorites__btn-ellipse');

function showNextImage() {
    if (carousel.done) {
        return;
    }

    const img = document.createElement('img');
    const { value, done } = carousel.next();

    if (!done) {
        img.src = value;
        carouselWrapper.appendChild(img);
    }
}

btnEllipse.addEventListener('click', showNextImage);





















