var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "images/dice" + randomNum1 + ".png";
var randomDiceImage2 = "images/dice" + randomNum2 + ".png";

var imageList = document.querySelectorAll("img");

var image1 = imageList[0];
var image2 = imageList[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);


var title = document.querySelector("h1");
if (randomNum1 > randomNum2) {
    title.innerHTML = "Player 1 Wins";
} else if (randomNum1 < randomNum2) {
    title.innerHTML = "Player 2 Wins";
} else {
    title.innerHTML = "Draw";
}