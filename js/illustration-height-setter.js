var targettedHeight = document.getElementById('first-introductory-text').clientHeight;
var illustration = document.getElementById('illustration-one');
var secondIllustration = document.getElementById('illustration-two');
var thirdIllustration = document.getElementById('illustration-three');
var ratio = 0.25;

illustration.style.height = targettedHeight * ratio + 'px';
secondIllustration.style.height = targettedHeight * ratio + 'px';
thirdIllustration.style.height = targettedHeight * ratio + 'px';
