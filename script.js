var orange = document.getElementById("orange");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var red = document.getElementById("red");

function colorChangeOrange() {
    document.body.style.backgroundColor = "orange";
}

function colorChangeGreen() {
    document.body.style.backgroundColor = "green";
}

function colorChangeBlue() {
    document.body.style.backgroundColor = "blue";
}

function colorChangeYellow() {
    document.body.style.backgroundColor = "yellow";
}

function colorChangeRed() {
    document.body.style.backgroundColor = "red";
}


orange.addEventListener("click", colorChangeOrange)
green.addEventListener("click", colorChangeGreen)
blue.addEventListener("click", colorChangeBlue)
yellow.addEventListener("click", colorChangeYellow)
red.addEventListener("click", colorChangeRed)