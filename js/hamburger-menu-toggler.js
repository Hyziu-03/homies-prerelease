var hamburgerMenu = document.querySelector('.hamburger-menu');
var navigation = document.querySelector('.navigation-list');
var lines = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', function () {
    navigation.classList.toggle('navigation-list-down');
    lines.forEach(line => {
        line.classList.toggle('active');
    });
})
