
$(function() {

//Create a new audio object
var audio = new Audio('/Instrumental.mp3');


//Calling the display alert container function
displayCont();

//Function to show the alert box
function displayCont(){

    //Show the alert Container
    $('#alertCont').css('display','flex');
    
    //Show the alert box
    $('#alertBox').show();
    
    //Animate the alert box
    gsap.from("#alertBox", 

    //Animation properties
    {duration: 1.5, 
        scale: 0, 
        delay: 1, 
        opacity: .5, 
        ease: "back"});
}

//Function to hide the alert box
$('#closeAlert').on('click', ()=>{

    //Hide the alert box
    $('#alertCont').delay(500).fadeOut();

    //Play the audio
    audio.play();
    //loop the audio
    audio.loop = true;
});

//Selecting the elements and inintializing variables
let squaresCount = 6,

//Assigning the stored generated function to a variable
colorVar = storeGeneratedColors(),

//Initializing a picked color
pickedColor = pickColor(),

//Create a score variable
score = 0,

//Selecting the squares
squares = document.querySelectorAll(".square");

//Appending a color from the generarated colors to the display output
$('#colorId').text((pickedColor).toUpperCase());



//Function for changing the background color of the squares
function changeColor(color) {
    for (let change of squares) {
        change.style.backgroundColor = color;
    }
}


//Function to pick a random color from the array
function pickColor() {

    //Generate a random number
    let randomIndex = Math.floor(Math.random() * colorVar.length);

    //Return the color at the random index
    return colorVar[randomIndex];
}


//Function to generate random colors
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //concatinating the rgb values to form a color
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//Function to store random color in an array
function storeGeneratedColors() {

    //Initializing a color array
    let colorArr = [];

    //Looping through the squaresCount and pushing the random colors to the array
    for (let i = 0; i < squaresCount; i++) {
        //Push the random color to the array
        colorArr.push(randomColor());
    }
    //Return the array
    return colorArr;
}



//The game logic
for (let i = 0; i < squares.length; i++) {
    
    //Add the stored colors to the squares
    squares[i].style.background = colorVar[i];

    //Add event listeners to the squares
    squares[i].addEventListener("click", function() {

        //Get the color of the clicked square
        let clickedColor = this.style.background;
        //Check if the clicked color is equal to the picked color
        if (clickedColor === pickedColor) {
            //Change the background color of the header to the picked color
            $('header').css('background', clickedColor);
            //Change the border color of the score container and the text color to the picked color
            $('#score').css({'borderColor': clickedColor, 'color': clickedColor});

            //Change the background color of all the squares to the picked color
            changeColor(pickedColor);
            //increment the score by 1
            score++;
            //Update the score in the score display
            $('#score').text(score);
            
            //show the correct message
            $('#correct').css('opacity', '1');
            //set a timeout to hide the correct message
            setTimeout ( () => {
                //hide the correct message
                $('#correct').css('opacity', '0');
                //reset the game
                reset();
            }, 1000);
        } else {

            //show the incorrect message
            $('#wrong').css('opacity', '1');
            //set a timeout to hide the incorrect message and reset the game
            setTimeout ( () => {
                //hide the incorrect message
                $('#wrong').css('opacity', '0');
                //reset the game
                reset();
            }, 1000);
        }
        
    });
}


//Function to reset the game
function reset() {

    //Generate new colors
    colorVar = storeGeneratedColors();

    //Pick a new random color from the array
    pickedColor = pickColor();

    //Change the colorDisplay to match the picked color
    $('#colorId').text((pickedColor).toUpperCase());

    //Change the color of the squares randomly again
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colorVar[i];
    }
    //Change the header background color to the default color
    $('header').css('background-color', 'RGB(14, 144, 154)');
    //Change the border color of the score container and the text color to the default color
    $('#score').css({'borderColor':'RGB(14, 144, 154)', 'color':'#429ea7'});

}


});