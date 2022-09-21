const Menu_button = document.querySelector('#menu-button')
const List = document.querySelector('.items-container')
const first_card = document.querySelector(".first-card")

Menu_button.addEventListener('click', () => {
    if(List.classList.contains('hideMenu')) {
        List.classList.remove('hideMenu');
        first_card.classList.add('underMenu')
        Menu_button.src = "./images/icon-close-menu.svg"
    }else {
        List.classList.add('hideMenu');
        first_card.classList.remove('underMenu')
        Menu_button.src = "./images/icon-hamburger.svg" 
    }
})