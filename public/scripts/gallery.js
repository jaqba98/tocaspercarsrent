const galleryElements = document.getElementById('galleryElements');

const result = cars.map(car => ({ id: car.id, name: car.name, photos: car.photos }))
    .map(car => car.photos.map(photo => ({ id: car.id, name: car.name, photo: photo })))
    .flat()
    .forEach(car => galleryElements.innerHTML += `<img src='assets/our-cars/${car.id}/${car.photo}' alt='${car.name}'>`);
