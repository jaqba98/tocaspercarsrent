const showGallery = () => {
    const ourCarsGallery = document.getElementById('ourCarsGallery');
    getCars().map(car => ({ id: car.id, name: car.name, photos: car.photos}))
        .map(car => car.photos.map(photo => ({id: car.id, name: car.name, photo: photo})))
        .flat()
        .map(car => `<img src="assets/our-cars/${car.id}/${car.photo}" alt="${car.name}">`)
        .forEach(carTag => ourCarsGallery.innerHTML += carTag);
};
showGallery();
