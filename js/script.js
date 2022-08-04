const btnMobile = document.getElementById('btn-mobile');
const iconMenu = document.querySelector('#icon-menu')

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        iconMenu.src = "./img/icon-close.svg"
    } else {
        iconMenu.src = "./img/icon-menu.svg"
    }
}

btnMobile.addEventListener('click', toggleMenu);

