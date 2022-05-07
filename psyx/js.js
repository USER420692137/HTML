var y = 1;

var widh = 300;
var height = 300;

var widh2 = 200;
var height2 = 100;

var bottom = 0;
var top = 500;

window.onload = function() {
    var PsyX = document.getElementById('PsyX');

    setInterval(function() {
        bottom++;
        if (bottom <= 63) {
            y = y * 1.1;
            PsyX.style.top = y;
        }
    }, 0.1);
}