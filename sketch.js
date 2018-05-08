//Variables for throw number and size of dice(to make the dots part easier)
var diceThrow = 1;
var diceSize = 117;

function setup() {
    createCanvas(600, 600);
   
}

function draw() {
    //Changes background depending of the dice throw
    background(diceThrow*30);

    //Dice
    rectMode(RADIUS);
    strokeWeight(15);
    fill(255);
    rect(width / 2, height / 2, diceSize, diceSize, diceSize / 5);

    //Dots and dot placements
    fill(0);
    if (diceThrow == 1 || diceThrow == 3 || diceThrow == 5) {
        ellipse(width / 2, height / 2, diceSize / 5, diceSize / 5);
    }
    if (diceThrow == 2 || diceThrow == 3 || diceThrow == 4 || diceThrow == 5 || diceThrow == 6) {
        ellipse(width / 2 - diceSize / 2.5, height / 2 - diceSize / 2.5, diceSize / 5, diceSize / 5);
        ellipse(width / 2 + diceSize / 2.5, height / 2 + diceSize / 2.5, diceSize / 5, diceSize / 5);
    }
    if (diceThrow == 4 || diceThrow == 5 || diceThrow == 6) {
        ellipse(width / 2 - diceSize / 2.5, height / 2 + diceSize / 2.5, diceSize / 5, diceSize / 5);
        ellipse(width / 2 + diceSize / 2.5, height / 2 - diceSize / 2.5, diceSize / 5, diceSize / 5);
    }
    if (diceThrow == 6) {
        ellipse(width / 2, height / 2 - diceSize / 2.5, diceSize / 5, diceSize / 5);
        ellipse(width / 2, height / 2 + diceSize / 2.5, diceSize / 5, diceSize / 5);
    }

}

//Click to roll dice
function mousePressed() {
    //Generates random number from 1 to 6
    diceThrow = int(random(1, 7));
    
}
