const header = document.querySelector(".header");
const burger = header.querySelector('.burger__menu');
const burgerIcon = header.querySelector(".burger__menu-icon");
burger.addEventListener('click', function () {
    header.classList.toggle('header--mobile');
    if (header.classList.contains('header--mobile')) {
        burgerIcon.src = './images/burger_menu_close.svg'
    } else {
        burgerIcon.src ='./images/Ham.png'
    }
    
})