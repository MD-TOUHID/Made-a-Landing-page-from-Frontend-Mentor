const burgerButton = document.getElementById('burgerButton');
const menu = document.getElementById('mainMenu');


burgerButton.addEventListener('click', () => {

    menu.classList.toggle('header__menu-visible');
    
    burgerButton.classList.toggle('header__burger-button-active');
});