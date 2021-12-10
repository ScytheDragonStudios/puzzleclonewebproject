function selectMode(mode) {
    var color = "ghostwhite";
    var image = "Abom.jpeg";
    var label = "Light Mode";

    if (mode === "dark") {
        color = "darkslateblue";
        image = "Ma'kina.jpeg";
        label = "Dark Mode";
    } else if (mode === "light") {
        color = "orangered";
        image = "Wrathfiel.jpeg";
        label = "Light Mode";
    } else {
        color = "dimgray";
        image = "Abom.jpeg";
        label = "Ninja Mode";
    }

    console.log(label);

    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;
}