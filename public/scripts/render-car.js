const loadCar = () => {
    const ourCar = document.getElementById('ourCar');
    var href = window.location.href;
    var url = new URL(href);
    var id = url.searchParams.get("id");
    const car = getCars().find(car => car.id === id);
    if (car === undefined) {
        window.location = 'index.html';
    }
    ourCar.innerHTML = `
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
        </div>
        <h2>Cennik</h2>
        <table>
            <tr>
                <td>Liczba dób</td>
                <td>Cena bez kaucji za 1 dzień</td>
                <td>Zniżka z kaucją {{car.deposit}}zł</td>
            </tr>
            ${car.priceList.map(price => `
                <tr>
                    <td>${price.numberOfDays}</td>
                    <td>${price.toBeAgreed ? 'do ustalenia' : price.price + ' zł' }</td>
                    <td>-${car.discount}%</td>
                </tr>
            `).join('')}
        </table>
        <h2>Limit kilometrów</h2>
        <table>
            <tr>
                <td>Liczba dób</td>
                <td>Limit kilometrów</td>
            </tr>
            ${car.priceList.map(price => `
                <tr>
                    <td>${price.numberOfDays}</td>
                    <td>${price.kilometerLimit} km</td>
                </tr>
            `).join('')}
        </table>
        <h2>Galeria</h2>
        ${car.photos.map(photo => `<img src="assets/our-cars/${car.id}/${photo}">`).join('')}
    `;
};

loadCar();
