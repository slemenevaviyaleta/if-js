const carousel = {
    data: 'https://if-student-api.onrender.com/api/hotels/popular', done: false,

    fetchData() {
        return fetch(this.data)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(this.data);
                this.data = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },

    index: 0, next() {
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

carousel.fetchData()
    .then(() => {
        btnEllipse.addEventListener('click', showNextImage);
    });

function showNextImage() {
    if (carousel.done) {
        return;
    }

    const img = document.createElement('img');
    const {value, done} = carousel.next();

    if (!done) {
        img.src = value;
        img.width = 295;
        img.height = 295;
        carouselWrapper.appendChild(img);
    }
}


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


////////////

const searchButton = document.getElementById('search__btn-js');
const availableHotelsDiv = document.querySelector('.available__hotels-wrapper');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();

    const searchValue = document.getElementById('destination').value;
    const url = `https://if-student-api.onrender.com/api/hotels?search=${searchValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            availableHotelsDiv.innerHTML = '';
            document.querySelector('.available__hotels__title').classList.remove('js__hidden');
            document.querySelector('.available__hotels').classList.remove('js__hidden');


            let hotelRow = document.createElement('div');
            hotelRow.className = 'hotel-row';

            data.forEach((hotel) => {
                const hotelElement = document.createElement('div');
                hotelElement.className = 'hotel__item';

                const imageElement = document.createElement('img');
                imageElement.src = hotel.imageUrl;
                imageElement.width = 295;
                imageElement.height = 295;
                imageElement.style.marginBottom = '24px';

                const nameElement = document.createElement('div');
                nameElement.textContent = hotel.name;
                nameElement.style.color = '#3077C6';
                nameElement.style.fontSize = '24px';
                nameElement.style.fontWeight = '400';
                nameElement.style.fontFamily = 'Roboto, sans-serif';
                nameElement.style.marginBottom = '24px';


                const locationElement = document.createElement('div');
                locationElement.textContent = `${hotel.country}, ${hotel.city}`;
                locationElement.style.color = '#BFBFBF';
                locationElement.style.fontSize = '24px';

                hotelElement.appendChild(imageElement);
                hotelElement.appendChild(nameElement);
                hotelElement.appendChild(locationElement);
                hotelRow.appendChild(hotelElement);
                availableHotelsDiv.appendChild(hotelRow);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});



