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

const quoteEl = document.getElementById('quote')
const speedEl = document.getElementById('speed')
const quote = '"Мы это то, что мы едим"'
let idx = 1
let speed = 80

writeText()

function writeText() {
    quoteEl.innerText = quote.slice(0, idx)

    idx++

    if(idx > quote.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}