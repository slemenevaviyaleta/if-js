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


//const palindrome = word => word.split('').every((i, index) => i === word[word.length - 1 - index]);
//
// console.log(palindrome('шалаш'));

const palindrome2 = word => word === word.split('').reverse().join('');

console.log(palindrome2('шалаш'));


const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

function getHotelData(word, hotels) {
    let newArr = [];
    hotels.forEach(hotels => {
        if (
            hotels.city.includes(word) ||
            hotels.country.includes(word) ||
            hotels.name.includes(word)
        ) {
            newArr.push(`${hotels.country}, ${hotels.city}, ${hotels.name}`);
        }
    });
    return newArr;
}

console.log(getHotelData('USA', hotels))

function getUniqueCountries(hotels) {
    const countries = hotels.map(function (hotel) {
        return hotel.country;
    });

    const countryCity = {};

    countries.forEach(function (uniqueCountry) {
        countryCity[uniqueCountry] = hotels.filter(function (hotel) {
            return hotel.country === uniqueCountry;
        }).map(function (hotel) {
            return hotel.city;
        });
    });

    return countryCity;
}

console.log(getUniqueCountries(hotels));




function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
    let calendar = [];
    let week = [];

    let prevMonthDays = (dayOfWeek + daysInWeek) % daysInWeek;
    for (let i = 0; i < prevMonthDays; i++) {
        week.push(daysInMonth - prevMonthDays + i);
    }

    if (dayOfWeek > daysInWeek) {
        throw new Error("Invalid day of the week.");
    }

    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day);
        if (week.length === daysInWeek) {
            calendar.push(week);
            week = [];
        }
    }

    let remainingDays = daysInWeek - week.length;
    for (let i = 1; i <= remainingDays; i++) {
        week.push(i);
    }

    if (week.length > 0) {
        calendar.push(week);
    }

    return calendar;
}

console.log(getCalendarMonth(30,7,4));



































