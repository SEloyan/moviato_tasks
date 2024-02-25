let myMenu = document.getElementById('menuToggle');
let menu = document.getElementById('menu');

myMenu.addEventListener('click', () => {
    menu.classList.toggle('activate');
});
