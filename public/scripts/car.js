const notFoundedCar = () => {
    carContent.innerHTML += '<div class="notFoundCar">Nie znaleziono takiego samochodu! Wróć do listy naszych samochodów <a href="our-cars.html">Nasze samochody</a></div>';
};

const buildCar = () => {
    const carContent = document.getElementById('carContent');
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    if (id === null) {
        notFoundedCar();
        return;
    }

    const car = cars.find(car => car.id === id);

    if (car === undefined) {
        notFoundedCar();
        return;
    }

    carContent.innerHTML += `<img src="assets/our-cars/${car.id}/${car.mainPhoto}" alt="${car.name}">
    <h3>${car.name}</h3>
    <ul>
        <li>Moc: ${car.power.km}KM, ${car.power.nm}NM</li>
        <li>Silnik: ${car.engine}</li>
        <li>Przyśpieszenie: 0-100 km/h: ${car.acceleration}s</li>
        <li>Maksymalna prędkość: ${car.maximumSpeed}km/h</li>
    </ul>
    <h3>Cennik</h3>
    <div class="priceContent">
        <table id="carPrice">
            <tr>
                <td>Liczba dni</td>
                <td>Cena bez kaucji / doba</td>
                <td>Cena z kaucją: ${car.deposit} zł</td>
            </tr>
        </table>
        <table id="carKilometerLimit">
            <tr>
                <td>Liczba dni</td>
                <td>Limit kilometrów</td>
            </tr>
        </table>
    </div>
    <h3>Galeria</h3>
    <div id="carGallery"></div>`;

    const carPrice = document.getElementById('carPrice');
    car.priceList.forEach(price => {
        carPrice.innerHTML += `<tr>
        <td>${price.numberOfDays}</td>
        <td>${price.toBeAgreed ? 'do ustalenia' : price.price.toString().concat(' zł')}</td>
        <td>-${car.discount}%</td>
        </tr>`;
    });

    const carKilometerLimit = document.getElementById('carKilometerLimit');
    car.priceList.forEach(price => {
        carKilometerLimit.innerHTML += `<tr>
        <td>${price.numberOfDays}</td>
        <td>${price.kilometerLimit} km</td>
        </tr>`;
    });

    const carGallery = document.getElementById('carGallery');
    car.photos.forEach(photo => carGallery.innerHTML += `<img src="assets/our-cars/${car.id}/${photo}" alt="${car.name}">`);
};

buildCar();
