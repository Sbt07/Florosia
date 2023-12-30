var swiper = new Swiper(".box-container", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
}); 
var swiper = new Swiper(".product-container", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}); 

let submit = document.querySelector('#submit');
let popup = document.querySelector('#popup');
let close = document.querySelector('#close-popup');
let contact = document.querySelector('.contact');
let heading = document.querySelector('.contact .heading');
let form = document.querySelector('.contact form');
let span = document.querySelector('.contact .heading span');


submit.onclick = () => {
    popup.classList.add('active');
    contact.classList.add('overlay');
    heading.classList.add('overlay');
    span.classList.add('overlay');
    form.reset();
}
close.onclick = () => {
    popup.classList.remove('active');
    contact.classList.remove('overlay');
    heading.classList.remove('overlay');
    span.classList.remove('overlay');
}