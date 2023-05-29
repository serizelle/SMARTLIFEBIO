const burgerEl = document.querySelector('.mobile__menu-btn');
const menuEl = document.querySelector('.menu__burger');

burgerEl.addEventListener('click', function (e) {
    menuEl.classList.toggle('menu_show');
});

const toggles = document.querySelectorAll('.toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})