function selectMode(mode) {
    var color = "ghostwhite";
    var image = "Abom.jpeg";
    var label = "Abomination";

    if (mode === "dark") {
        color = "darkslateblue";
        image = "Ma'kina.jpeg";
        label = "Machine God";
    } else if (mode === "light") {
        color = "orangered";
        image = "Wrathfiel.jpeg";
        label = "Wolf Demon";
    } else {
        color = "dimgray";
        image = "Abom.jpeg";
        label = "Abomination";
    }

    console.log(label);

    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;
}