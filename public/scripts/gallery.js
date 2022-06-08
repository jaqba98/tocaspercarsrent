const createImageElement = (car) => {
    return `<img src="assets/our-cars/${car.id}/${car.photo}" alt="${car.name}">`;
};

const loadAllImages = () => {
    const galleryElements = document.getElementById('galleryElements');
    getCarsList()
        .map(car => ({ id: car.id, name: car.name, photos: car.photos }))
        .map(car => car.photos.map(photo => ({id: car.id, name: car.name, photo: photo})))
        .flat()
        .map(car => createImageElement(car))
        .forEach(car => galleryElements.innerHTML += car);
};

loadAllImages();
