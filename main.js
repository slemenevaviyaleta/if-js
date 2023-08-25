const carousel = {
    data: null,
    done: false,

    fetchData() {
        const cachedData = sessionStorage.getItem('carouselData');

        if (cachedData) {
            this.data = JSON.parse(cachedData);
            return Promise.resolve();
        }

        return fetch('https://if-student-api.onrender.com/api/hotels/popular')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.data = data;
                sessionStorage.setItem('carouselData', JSON.stringify(data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },

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

const hotelsSection = document.querySelector('.available__hotels');
const availableHotelsDiv = document.querySelector('.available__hotels-wrapper');
const searchButton = document.getElementById('search__btn-js');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();

    hotelsSection.scrollIntoView({
        behavior: 'smooth'
    });

    document.querySelector('.available__hotels__title').classList.remove('js__hidden');
    hotelsSection.classList.remove('js__hidden');

    const searchValue = document.getElementById('destination').value;
    const guestsInput = document.getElementById("guests").value;
    const values = guestsInput.split("—").map(value => value.trim());

    const [adults, children, rooms] = values;
    const adultsCount = parseInt(adults, 10);
    const childrenCount = parseInt(children, 10);
    const roomsCount = parseInt(rooms, 10);

    if (adultsCount > 0 && roomsCount > 0) {
        const apiUrl = `https://if-student-api.onrender.com/api/hotels?search=${searchValue}&adults=${adultsCount}&children=${childrenCount}&rooms=${roomsCount}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                availableHotelsDiv.innerHTML = '';
                renderHotels(data);
            })
            .catch(error => {
                console.error('Error:', error);
                availableHotelsDiv.innerHTML = '<p>An error occurred while fetching hotels. Please try again later.</p>';
            });
    }

});

function renderHotels(data) {
    const hotelRowsHTML = data.map(hotel => {
        return `
            <div class="hotel__item">
                <img src="${hotel.imageUrl}" width="295" height="295" style="margin-bottom: 24px;">
                <div class="hotel-name" style="color: #3077C6; font-size: 24px; font-weight: 400; font-family: Roboto, sans-serif; margin-bottom: 24px;">${hotel.name}</div>
                <div class="hotel-location" style="color: #BFBFBF; font-size: 24px;">${hotel.country}, ${hotel.city}</div>
            </div>
        `;
    }).join('');

    const hotelRow = document.createElement('div');
    hotelRow.className = 'hotel-row';
    hotelRow.innerHTML = hotelRowsHTML;
    availableHotelsDiv.appendChild(hotelRow);
}

