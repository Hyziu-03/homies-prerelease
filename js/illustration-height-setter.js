var targettedHeight = document.getElementById('first-introductory-text').clientHeight;
var illustration = document.getElementById('illustration-one');
var secondIllustration = document.getElementById('illustration-two');
var ratio = 0.25;

try {
    illustration.style.height = targettedHeight * ratio + 'px';
    secondIllustration.style.height = targettedHeight * ratio + 'px';
} catch(exception) {
    console.error(exception);
}
