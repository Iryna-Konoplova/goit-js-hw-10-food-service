import './styles.css';

import menuTemplate from './templates/menu.hbs';

import menu from './menu.json';


const body = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__toggle');
const menuContainer = document.querySelector('.js-menu');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitch.addEventListener('change', onToggleSwitchChange)

setThemeOflocalStorage();

const menuMarkup = createMenuCardMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function onToggleSwitchChange(e) {
    if (!e.currentTarget.checked) {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem( 'Theme', Theme.LIGHT);
    } else {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem( 'Theme', Theme.DARK);
    }
}

function setThemeOflocalStorage() {
    const savedTheme = localStorage.getItem('Theme');

    if (savedTheme) {
       body.classList.add(savedTheme); 
    }

    if (savedTheme === Theme.DARK) {
        themeSwitch.checked = true;
    }
}

function createMenuCardMarkup(menu) {
    return menuTemplate(menu);
}
