var targettedWidth = document.getElementById('wider-button').clientWidth;
var narrowerButton = document.getElementById('narrower-button');
var multiplier = 0.62;
narrowerButton.style.width = targettedWidth * multiplier + 'px !important';
