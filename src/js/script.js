const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close svg");
const overlay = document.querySelector(".menu__overlay");

burger.addEventListener("click", function () {
    menu.classList.add("menu_active");
});

close.addEventListener("click", function () {
    menu.classList.remove("menu_active");
});

overlay.addEventListener("click", function () {
    menu.classList.remove("menu_active");
});


function json(url) {
    return fetch(url).then(res => res.json());
}

const API_KEY = '83a03672d8dcba2b1afddc21b5f9405324a76c9427094b6ca2f8cdd7'
const locationNode = document.querySelector('.location')
const locationTextNode = document.querySelector('.location__text')
const locationButtonYesNode = document.querySelector('.location-button-yes')
const locationButtonChangeNode = document.querySelector('.location-button-change')
const locationChangeNode = document.querySelector('.changeLocation')
const locationButtonConfirmChangeNode = document.querySelector('.locationButtonConfirmChange')
const locationSelectNode = document.querySelector('.changeLocation__select')
const mainNode = document.querySelector('.main')
const delay = 1000

json(`https://api.ipdata.co?api-key=${API_KEY}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);

    function showLocationNode() {
        setTimeout(() => {
            locationNode.style.display = 'flex'
        }, delay);
    }

    function setLocation() {
        const textLocation = `Ваш город ${data.city}?`
        locationTextNode.innerText = textLocation
    }

    function getCurrentCity(city) {
        console.log(city)
    }

    locationButtonYesNode.addEventListener('click', () => {
        locationNode.style.display = 'none'
        let currentCity = data.city
        getCurrentCity(currentCity)
    })

    locationButtonChangeNode.addEventListener('click', () => {
        mainNode.style.filter = 'blur(5px)'
        locationChangeNode.style.display = 'flex'
    })

    locationButtonConfirmChangeNode.addEventListener('click', () => {
        let currentCity = locationSelectNode.value
        getCurrentCity(currentCity)
        mainNode.style.filter = 'none'
        locationNode.style.display = 'none'
        locationChangeNode.style.display = 'none'
    })


    showLocationNode()
    setLocation()

});