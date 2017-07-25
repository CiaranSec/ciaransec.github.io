if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 250);

}

var x = 0;

var titleText = [ "&#10015;", "&#10015;K", "&#10015;Kin", "&#10015;King", "&#10015;KingOf", "&#10015;KingOfT", "&#10015;KingOfThe", "&#10015KingOfTheD", "&#10015;KingOfTheDea", "&#10015;KingOfTheDead&#10015;", "&#10015;&#10015;&#10015;&#10015;&#10015;&#10015;&#10015;"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
