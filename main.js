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