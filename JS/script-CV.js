const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

var text = document.getElementById("haut-de-page");

var showText = function(target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function() { showText(target, message, index, interval); }, interval);
    }
}

$(function() {
    showText("#haut-de-page", "Mon CV. ", 0, 150);
});