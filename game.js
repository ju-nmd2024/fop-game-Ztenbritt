//X and Y position of the Ahsoka sprite.
let x = 50;
let y = 50;

//The current speed of the sprite.
let speed = 0;

//The acceleration that can have either a positive or negative direction.
let accel = 0.5; 

//Variable that is set to true while the game is active.
let gameActive = false;

//Canvas size
const canvasY = 600;
const canvasX = 700;

//Variable that deside if you won or lost.
let saved = true;

//Variable that can activate the start menu.
let startMenu = true;

//To move the instructions away from the screen.
let textY = 0;


//Button variables
const again = "Play again";
const menu = "Back to menu";
let limits1 = false;
let limits2 = false;
let limits3 = false;

//Button to play again
function button1() {
  strokeWeight(2);
  fill(0, 0, 0);
  rect(150, 280, 200, 100);
  fill(0, 0, 0);
  textSize(30);
  text(again, 180, 345);
}

//Button to go back to menu
function button2() {
  strokeWeight(2);
  fill(0, 0, 0);
  rect(350, 280, 200, 100);
  fill(0, 0, 0);
  textSize(30);
  text(menu, 360, 345);
}

//Start button
function button3() {
  noStroke();
  fill(0, 0, 0);
  rect(0, 0, 700, 600);
  fill(255, 255, 255);
  rect(200, 200, 300, 200);
  fill(0, 255, 0);
  textSize(70);
  text("PLAY", 265, 330);
}

//Creating the canvas.
function setup() {
  createCanvas(canvasX, canvasY);
}

//Ahsoka sprite
function ahsoka() {
  push();
  scale(0.25);
  translate(1400, 300);

  //legs
  noStroke();
  fill(45, 49, 51);
  beginShape();
  vertex(x - 50, y + 280);
  vertex(x - 42, y + 400);
  vertex(x - 50, y + 450);
  vertex(x - 15, y + 450);
  vertex(x - 16, y + 400);
  vertex(x - 5, y + 280);
  endShape();

  beginShape();
  vertex(x + 50, y + 280);
  vertex(x + 42, y + 400);
  vertex(x + 50, y + 450);
  vertex(x + 15, y + 450);
  vertex(x + 16, y + 400);
  vertex(x + 5, y + 280);
  endShape();

  //left arm
  fill(207, 117, 33);
  beginShape();
  vertex(x - 47, y + 80);
  vertex(x - 80, y + 195);
  vertex(x - 65, y + 200);
  vertex(x - 40, y + 130);
  endShape();

  fill(71, 17, 23);
  beginShape();
  vertex(x - 80, y + 195);
  vertex(x - 65, y + 200);
  vertex(x - 85, y + 280);
  vertex(x - 100, y + 278);
  vertex(x - 90, y + 220);
  endShape();

  //left hand
  ellipse(x - 92, y + 279, 30);

  //right arm
  fill(207, 117, 33);
  beginShape();
  vertex(x + 47, y + 80);
  vertex(x + 80, y + 195);
  vertex(x + 65, y + 200);
  vertex(x + 40, y + 130);
  endShape();

  fill(71, 17, 23);
  beginShape();
  vertex(x + 80, y + 195);
  vertex(x + 65, y + 200);
  vertex(x + 85, y + 280);
  vertex(x + 100, y + 278);
  vertex(x + 90, y + 220);
  endShape();

  //right hand
  ellipse(x + 92, y + 279, 30);

  //boots
  beginShape();
  vertex(x - 50, y + 450);
  vertex(x - 45, y + 540);
  vertex(x - 70, y + 585);
  vertex(x - 20, y + 570);
  vertex(x - 25, y + 540);
  vertex(x - 15, y + 450);
  vertex(x - 38, y + 440);
  endShape();

  beginShape();
  vertex(x + 50, y + 450);
  vertex(x + 45, y + 540);
  vertex(x + 70, y + 585);
  vertex(x + 20, y + 570);
  vertex(x + 25, y + 540);
  vertex(x + 15, y + 450);
  vertex(x + 38, y + 440);
  endShape();

  //dress
  beginShape();
  vertex(x - 50, y + 80);
  vertex(x + 50, y + 80);
  vertex(x + 40, y + 200);
  vertex(x + 70, y + 300);
  vertex(x - 70, y + 300);
  vertex(x - 40, y + 200);
  endShape();

  //neck
  rect(x - 15, y + 40, 30, 50);

  //head
  fill(207, 117, 33);
  beginShape();
  vertex(x - 40, y + 30);
  vertex(x, y + 55);
  vertex(x + 40, y + 30);
  vertex(x + 40, y - 40);
  vertex(x - 40, y - 40);
  endShape();

  //hair
  fill(255, 255, 255);
  beginShape();
  vertex(x, y - 65);
  vertex(x - 30, y - 90);
  vertex(x - 70, y + 10);
  vertex(x - 30, y + 100);
  vertex(x - 15, y + 180);
  vertex(x - 10, y + 80);
  vertex(x - 35, y);
  vertex(x, y - 20);

  vertex(x, y - 65);
  vertex(x + 30, y - 90);
  vertex(x + 70, y + 10);
  vertex(x + 30, y + 100);
  vertex(x + 15, y + 180);
  vertex(x + 10, y + 80);
  vertex(x + 35, y);
  vertex(x, y - 20);
  endShape();

  //eye shadow
  fill(125, 76, 31);
  ellipse(x - 15, y + 13, 21, 10);
  ellipse(x + 15, y + 13, 21, 10);

  //eyes
  fill(255, 255, 255);
  beginShape();
  vertex(x - 26, y + 15);
  vertex(x - 6, y + 15);
  vertex(x - 14, y + 10);
  endShape();

  beginShape();
  vertex(x + 26, y + 15);
  vertex(x + 6, y + 15);
  vertex(x + 14, y + 10);
  endShape();

  //left pupil
  fill(19, 35, 102);
  beginShape();
  vertex(x - 19, y + 15);
  vertex(x - 19, y + 12);
  vertex(x - 14, y + 10);
  vertex(x - 11, y + 11.9);
  vertex(x - 11, y + 15);
  endShape();

  //right pupil
  beginShape();
  vertex(x + 19, y + 15);
  vertex(x + 19, y + 12);
  vertex(x + 14, y + 10);
  vertex(x + 11, y + 11.9);
  vertex(x + 11, y + 15);
  endShape();

  //left eyebrow
  noFill();
  strokeWeight(3);
  stroke(255, 255, 255);
  beginShape();
  vertex(x - 27, y + 10);
  vertex(x - 18, y + 7);
  vertex(x - 5, y + 10);
  endShape();

  //right eyebrow
  beginShape();
  vertex(x + 27, y + 10);
  vertex(x + 18, y + 7);
  vertex(x + 5, y + 10);
  endShape();

  //lips
  noStroke();
  fill(45, 49, 51);
  beginShape();
  vertex(x - 12, y + 37);
  vertex(x + 12, y + 37);
  vertex(x, y + 42);
  endShape();

  beginShape();
  vertex(x - 12, y + 37);
  vertex(x - 3, y + 35);
  vertex(x, y + 37);
  vertex(x + 3, y + 35);
  vertex(x + 12, y + 37);
  endShape();

  //nose
  fill(79, 54, 42);
  beginShape();
  vertex(x - 5, y + 30);
  vertex(x + 5, y + 30);
  vertex(x + 1, y + 27);
  vertex(x, y + 15);
  vertex(x - 1, y + 27);
  endShape();

  pop();
}

//Grass
function ground() {
  noStroke();
  fill(32, 66, 41);
  rect(0, canvasY - 70, canvasX, canvasY);
}

//Instructions text.
function instruction() {
  noStroke();
  fill(32, 66, 41);
  textSize(40);
  text("Use spacebar to control the force", 50, textY + 50);
}

//When you press spacebar, it changes gravity. 
//Activates when stop is inactive.
function keyPressed() {
  if(keyCode === 32) {
    if(gameActive === true) {
      accel *= -1;
      textY = -100;
    } 
  }
}

function mousePressed() {
  //Start button that loads the game.
  if(limits3 === true && startMenu === true) {
    startMenu = false;
    gameActive = true;
    x = 50;
    y = 50;
    textY = 0;
    if(accel < 0) {
      accel *= -1;
    }
}
   
//Button to go to the start menu.
//Doesn't work at the moment.
  else if(limits2 === true && gameActive === false && startMenu === false) {
    startMenu = true;
  }

//Button to play again is activated and the game loads again.
//Doesn't work at the moment.
  else if(limits1 === true && gameActive === false && startMenu === false) {
    gameActive = true;
    x = 50;
    y = 50;
    if(accel < 0) {
      accel *= -1;
    }
  }
}

//Big draw function, controls the game.
function draw() {
  //(Loads the start menu.
  if(startMenu === true) {
  button3();
  }
  
  //Hitbox for the start button.
  if(mouseX >= 200 && mouseX <= 500 && mouseY >= 200 && mouseY <= 400) {
    limits3 = true;
  }
  else if(mouseX < 200 || mouseX > 500 || mouseY < 200 || mouseY > 400) {
    limits3 = false;
  }

  //Hitbox for the button to play again.
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 300 && mouseY <= 400) {
    limits1 = true;
  }
  else if(mouseX < 100 || mouseX > 300 || mouseY < 300 || mouseY > 400) {
    limits1 = false;
  }

  //Hitbox for the button to go back to the start menu.
  if(mouseX >= 300 && mouseX <= 500 && mouseY >= 300 && mouseY <= 400) {
    limits2 = true;
  }
  else if(mouseX < 300 || mouseX > 500 || mouseY < 300 || mouseY > 400) {
    limits2 = false;
  }

  //Loading the game itself.
  if(startMenu == false) {
    background(77, 138, 138);
    ground();
    instruction();
    ahsoka();

    //Gravity
    if(gameActive === true) {
      speed += accel;
      y += speed;
    }

    //Ground detector
    if(y > 1400) {

      //Tells the end screen that Ohsaka hit the ground at a LOW speed.
      //Stops the game
      if(speed < 10 && gameActive === true) {
        gameActive = false;
        speed = 0;
        saved = true;
      }

      //Tells the end screen that Ohsaka hit the ground at a HIGH speed.
      //Stops the game.
      else if(speed >= 10 && gameActive === true) {
        gameActive = false;
        speed = 0;
        saved = false;
      }

      //End screen when the player wins.
      if(saved === true) {
        strokeWeight(10);
        stroke(0, 0, 0);
        fill(107, 176, 176);
        rect(150,80,400,300);
        strokeWeight(2);
        stroke(0,255,0);
        fill(255, 255, 255);
        textSize(30);
        text("AHSOKA WAS SAVED!", 190, 130);
      }

      //End screen when the player loses.
      else if(saved === false) {
        strokeWeight(10);
        stroke(0, 0, 0);
        fill(107, 176, 176);
        rect(150,80,400,300);
        strokeWeight(2);
        stroke(255,0,0);
        fill(255, 255 ,255);
        textSize(20);
        text("AHSOKA DIED FROM FALL DAMAGE", 175, 130);
      }
      
      //Loads the end screen buttons
      button1();
      button2(); 
    }
  }
}
