

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var playerOne = getRandomNumber(1, 6);
console.log(playerOne);

var playerTwo = getRandomNumber(1, 6);
console.log(playerTwo);



var imageElementOne = document.querySelector(".img1");
var imageElementTwo = document.querySelector(".img2");


var imageFilenameOne = "dice" + playerOne + ".png";

var imageFilenameTwo = "dice" + playerTwo + ".png";


imageElementOne.src = "images/" + imageFilenameOne;

imageElementTwo.src = "images/" + imageFilenameTwo;


// Game Rules
var h1Element = document.querySelector("h1");

if (playerOne > playerTwo) {
    h1Element.textContent = "Player 1 Wins!";
} else if (playerOne < playerTwo) {
    h1Element.textContent = "Player 2 Wins!";
} else {
    h1Element.textContent = "Draw";
}