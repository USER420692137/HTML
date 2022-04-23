var x = 0;
var y = 0;

window.onload = function() {
    var text = document.getElementById("text");
    var Gym = document.getElementById("Gym");

    setInterval(function() {
        if (x < 800) {
            x++;
            text.style.left = x;
        } else if (x >= 800) {
            if (y < 400) {
                y++;
                Gym.style.top = y;
            }
        }
    }, 0.1)
}