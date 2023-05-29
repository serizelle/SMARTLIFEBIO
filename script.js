const burgerEl = document.querySelector('.mobile__menu-btn');
const menuEl = document.querySelector('.menu__burger');

burgerEl.addEventListener('click', function (e) {
    menuEl.classList.toggle('menu_show');
});