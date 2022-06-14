const ourCarsElements=document.getElementById("ourCarsElements");cars.forEach(car=>{ourCarsElements.innerHTML+=`<div class="ourCarElement">\n\t<img src="assets/our-cars/${car.id}/${car.mainPhoto}" alt="${car.name}">\n\t<h3>${car.name}</h3>\n\t<ul>\n\t\t<li>Moc: ${car.power.km}KM, ${car.power.nm}NM</li>\n\t\t<li>Silnik: ${car.engine}</li>\n\t\t<li>Przyśpieszenie: 0-100 km/h: ${car.acceleration}s</li>\n\t\t<li>Maksymalna prędkość: ${car.maximumSpeed}km/h</li>\n\t</ul>\n\t<a href="car.html?id=${car.url}">Cennik</a>\n</div>`});