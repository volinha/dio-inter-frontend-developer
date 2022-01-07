const toggleButton = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

toggleButton.addEventListener('click', toggleDarkMode)

function toggleDarkMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    toggleButton.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightModeString = "Light Mode"
    const darkModeString = "Dark Mode"
    const isDark = "Dark Mode ON"
    const isLight = "Light Mode ON"

    if(body.classList.contains(darkModeClass)){
        toggleButton.innerHTML = lightModeString;
        h1.innerHTML = isDark;
    } else {
        toggleButton.innerHTML = darkModeString;
        h1.innerHTML = isLight;
    }
}