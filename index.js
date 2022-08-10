$(function() {

//Selecting the elements and inintializing variables
let squaresCount = 6,

//Initializing a color array
colorArr = [],

//Selecting the squares
squares = document.querySelectorAll(".square");

//Appending a color from the generarated colors to the display output
//$('#colorId').text(pickColor());


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
    //concatinating the rgb values to form a color
    return "RGB(" + r + ", " + g + ", " + b + ")";
}


//Function to store random color in an array
function storeGeneratedColors() {

    //Looping through the squaresCount and pushing the random colors to the array
    for (let i = 0; i < squaresCount; i++) {
        //Push the random color to the array
        colorArr.push(randomColor());
    }
}


//Function to pick a random color from the array
function pickColor() {

    //Generate a random number
    let randomIndex = Math.floor(Math.random() * colorArr.length);

    //Return the color at the random index
    return colorArr[randomIndex];
}

storeGeneratedColors();
pickColor();
console.log(colorArr);
console.log(pickColor());
});