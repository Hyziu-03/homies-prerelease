var hamburgerMenu = document.querySelector('.hamburger-menu');
var lines = document.querySelectorAll('.line');
var navigationList = document.getElementById('navigation-list');

var headerHeight = document.getElementById('header').clientHeight;
var styles = '.navigation-list { display: flex; flex-direction: column; justify-content: center; align-items: center; position: absolute; top: 0; left: 16px; backdrop-filter: blur(5px); } .navigation-item { padding: 24px 0; position: relative; bottom: 0; margin: 5px; width: 90vw; text-align: center; background: #3B5672; } .navigation-list:first-child { margin-top: 100px !important; } .navigation-list:last-child { margin-bottom: 20px !important; }';
var stylesheet = document.createElement('style');

var isOpen = false;

hamburgerMenu.addEventListener('click', function () {
    if(isOpen == false) {
        navigationList.style.marginTop = headerHeight + 'px';
        stylesheet.innerText = styles;
        document.head.appendChild(stylesheet);
        lines.forEach(line => {
            line.classList.toggle('active');
        });
        navigationList.style.visibility = 'visible';
        
        isOpen = true;
    } else {
        isOpen = false;
        
        navigationList.style.visibility = 'hidden';
        lines.forEach(line => {
            line.classList.remove('active');
        });
        document.head.removeChild(stylesheet);   
    }
});
