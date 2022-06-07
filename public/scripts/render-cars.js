const loadCars = () => {
    const ourCarsItems = document.getElementById('ourCarsItems');
    getCars().map(car =>
        `<section class="car">
            <div class="carImage">
                <img src="assets/our-cars/${car.id}/${car.mainPhoto}" alt="${car.name}">
            </div>
            <div class="carDescription">
                <h3>${car.name}</h3>
                <ul>
                    <li>Moc: ${car.power.km}KM, ${car.power.nm}NM</li>
                    <li>Silnik: ${car.engine}</li>
                    <li>Przyśpieszenie: 0-100 km/h: ${car.acceleration}s</li>
                    <li>Maksymalna prędkość: ${car.maximumSpeed}km/h</li>
                </ul>
                <a href="car.html?id=${car.id}">Cennik</a>
            </div>
        </section>`
    ).forEach(carTag => ourCarsItems.innerHTML += carTag);
};

loadCars();
