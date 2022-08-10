$(function() {

//Selecting the elements and inintializing variables
let squaresCount = 6,

//Initializing a color array
colors = [],

//Selecting the squares
squares = document.querySelectorAll(".square");

//Appending a color from the generarated colors to the display output
$('#colorId').text(pickColor());


//Function for changing the background color of the squares
function changeColor(color) {
    for (let change of squares) {
        change.style.backgroundColor = color;
    }
}


//Function to generate random colors
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//Function to store random color in an array
function storeGeneratedColors() {
    for (let i = 0; i < squaresCount; i++) {
        colors.push(randomColor());
    }
}
});