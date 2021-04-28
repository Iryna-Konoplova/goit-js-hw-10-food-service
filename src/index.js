import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__toggle');
themeSwitch.addEventListener('change', onToggleSwitchChange)

function onToggleSwitchChange(e) {
    if (!body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        localStorage.setItem( 'Theme', 'dark-theme');
        
    } else {
       body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem( 'Theme', 'light-theme');
    }
   
  
}