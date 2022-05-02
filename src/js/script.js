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

burger.addEventListener("click", function(){
    menu.classList.add("menu_active");
});

close.addEventListener("click", function(){
    menu.classList.remove("menu_active");
});

overlay.addEventListener("click", function(){
    menu.classList.remove("menu_active");
});
