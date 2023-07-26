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
            return {done: true};
        }

        const imageUrl = this.data[this.index].imageUrl;
        this.index++;

        return {value: imageUrl, done: false};
    },
};

const carouselWrapper = document.querySelector('.favorites__carousel');
const btnEllipse = document.querySelector('.favorites__btn-ellipse');

function showNextImage() {
    if (carousel.done) {
        return;
    }

    const img = document.createElement('img');
    const {value, done} = carousel.next();

    if (!done) {
        img.src = value;
        carouselWrapper.appendChild(img);
    }
}

btnEllipse.addEventListener('click', showNextImage);

//////////////

const guestField = document.getElementById('guestField');
const filterWrapper = document.querySelector('.filter__wrapper');

guestField.addEventListener('click', function () {
    filterWrapper.classList.toggle('js__hidden');
});


const adultsPlusBtn = document.querySelector('.plus__adults');
const adultsNumElem = document.querySelector('.adults__number');
const adultsMinBtn = document.querySelector('.minus__adults');

let adultsNum = 0;

adultsPlusBtn.addEventListener('click', function () {
    if (adultsNum < 30) {
        adultsNum += 1;
        adultsNumElem.textContent = adultsNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
});

adultsMinBtn.addEventListener('click', function () {
    if (adultsNum > 1) {
        adultsNum -= 1;
        adultsNumElem.textContent = adultsNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
});

const childPlusBtn = document.querySelector('.plus__child');
const childMinBtn = document.querySelector('.minus__child');
const childNumElem = document.querySelector('.child__number');
const selectElements = document.querySelectorAll('.filter__select');


let childNum = 0;

childPlusBtn.addEventListener('click', function () {
    if (adultsNum === 0) {
        childPlusBtn.setAttribute('disabled');
    }
    if (childNum < 10) {
        childNum += 1;
        childNumElem.textContent = childNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
});

childMinBtn.addEventListener('click', function () {
    if (childNum > 0) {
        childNum -= 1;
        childNumElem.textContent = childNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
});

function updateSelectVisibility() {
    for (let i = 0; i < selectElements.length; i++) {
        if (i < childNum) {
            selectElements[i].classList.remove('js__hidden');
        } else {
            selectElements[i].classList.add('js__hidden');
        }
    }
}

const roomPlusBtn = document.querySelector('.plus__room');
const roomMinBtn = document.querySelector('.minus__room');
const roomNumElem = document.querySelector('.room__number');

let roomNum = 0;

roomPlusBtn.addEventListener('click', function () {
    if (roomNum < 30) {
        roomNum += 1;
        roomNumElem.textContent = roomNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
});

roomMinBtn.addEventListener('click', function () {
    if (roomNum > 1) {
        roomNum -= 1;
        roomNumElem.textContent = roomNum;
    }
    updateCounts(adultsNum, childNum, roomNum);
})

function updateCounts(adultsCount, childrenCount, roomCount) {
    const inputValue = `${adultsCount} Adults — ${childrenCount} Children — ${roomCount} Room`;
    document.getElementById('guests').value = inputValue;
    updateSelectVisibility();
}

updateCounts(adultsNum, childNum, roomNum);












