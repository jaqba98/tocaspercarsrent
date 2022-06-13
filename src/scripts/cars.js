const cars = [
    {
        id: "cupra-ateca",
        url: "wynajem-cupra-ateca-kielce",
        name: "Cupra Ateca",
        power: { km: 300, nm: 400 },
        engine: "2.0 TSI 4Drive",
        acceleration: 4.9,
        maximumSpeed: 247,
        mainPhoto: "cupra-ateca-1.jpg",
        photos: ["cupra-ateca-1.jpg", "cupra-ateca-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 400, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 350, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 300, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 250, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
    },
    {
        id: "cupra-formentor-vz5",
        url: "wynajem-cupra-formentor-vz5-kielce",
        name: "Cupra Formentor VZ5",
        power: { km: 310, nm: 400 },
        engine: "2.0 TSI 4Drive",
        acceleration: 4.9,
        maximumSpeed: 250,
        mainPhoto: "cupra-formentor-vz5-1.jpg",
        photos: ["cupra-formentor-vz5-1.jpg", "cupra-formentor-vz5-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 500, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 400, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 350, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 300, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
    },
    {
        id: "honda-civic-type-r",
        url: "wynajem-honda-civic-type-r-kielce",
        name: "Honda Civic Type R",
        power: { km: 320, nm: 400 },
        engine: "2.0 VTEC Turbo",
        acceleration: 5.8,
        maximumSpeed: 270,
        mainPhoto: "honda-civic-type-r-1.jpg",
        photos: ["honda-civic-type-r-1.jpg", "honda-civic-type-r-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 550, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 500, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 400, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 350, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
    },
    {
        id: "hyundai-i30n",
        url: "wynajem-hyundai-i30n-kielce",
        name: "Hyundai I30n",
        power: { km: 280, nm: 392 },
        engine: "2.0 T-GDI",
        acceleration: 5.4,
        maximumSpeed: 250,
        mainPhoto: "hyundai-i30n-1.jpg",
        photos: ["hyundai-i30n-1.jpg", "hyundai-i30n-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 400, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 350, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 300, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 250, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
        },
        {
        id: "seat-leon-cupra-r",
        url: "wynajem-seat-leon-cupra-r-kielce",
        name: "Seat Leon Cupra R",
        power: { km: 300, nm: 380 },
        engine: "1984 cm3, R4 turbobenzyna",
        acceleration: 4.9,
        maximumSpeed: 250,
        mainPhoto: "seat-leon-cupra-r-1.jpg",
        photos: ["seat-leon-cupra-r-1.jpg", "seat-leon-cupra-r-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 600, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 550, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 500, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 400, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
    },
    {
        id: "subaru",
        url: "wynajem-subaru-kielce",
        name: "Subaru",
        power: { km: 300, nm: 407 },
        engine: "2.5 benzyna",
        acceleration: 5.2,
        maximumSpeed: 255,
        mainPhoto: "subaru-1.jpg",
        photos: ["subaru-1.jpg", "subaru-2.jpg"],
        priceLis: [
            { numberOfDays: "1-2", price: 650, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "3-6", price: 600, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "7-13", price: 550, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "14-21", price: 500, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "22-29", price: 450, kilometerLimit: 250, toBeAgreed: false },
            { numberOfDays: "30+", price: 0, kilometerLimit: 250, toBeAgreed: true }
        ],
        discount: 10,
        deposit: 1000
    }
];
