//console.log("yo, I'm alive!");
var paper = new Raphael(document.getElementById("gameArea"));

//Paper dimensions
var pWidth = paper.width;
var pHeight = paper.height;

var bg = paper.rect(0, 0, pWidth, pHeight).attr(
	{
		"stroke-width": 15,
		//"stroke": "#522a0c",
		"stroke-linecap": "round"
	}
)


var bricked = {
	x: 
}

//Define a function called checkCollisions which takes in no arguments and returns no values. 
//It will execute a for loop to check whether any of the circles in circleTrain are hitting the brick. (10 marks)

var circleTrain = [];

var createCircles = function () {

	for (i=0; i<100; i++)
	{
		var xCoord = pWidth/2
		var yCoord = pHeight/2
		circleTrain[i] = paper.circle (xCoord,yCoord,10)
		circleTrain[i].attr ({"fill": "red"});
	}
}

createCircles();

function checkCollisions () {
	for (let i = 0; i < 100; i++ ) { 
		bricks[bc] = [];
		initialY = 0;
		for (let br = 0; br < brickRowTotal; br++) { //Brick Row array
			bricks[bc][br] = {
				x: initialX, y: initialY,
			}
			initialY = initialY + bricksYPadding + brickHeight;
		}
		initialX += (30 + bricksXPadding);
	}
}


var checkCollisions = function () {
		for (let i = 0; i < 100; i++) {

			var brick_posX = brick.x;
			var brick_posY = brick.y;

			var brick_x_length = brick_posX ? brick_posX + brick.width : null;
			var brick_y_length = brick_posY ? brick_posY + brick.height : null; 

			if circleTrain[i].xCoord > brick_posX //circleTrain hit brick logic
				&& circleTrain[i].xCoord < brick_x_length
				&& circleTrain[i].yCoord > brick_posY
				&& circleTrain[i].yCoord < brick_y_length) {

				circleTrain[i].shape.remove();
				brick.x = null;
				brick.y = null;
				console.log("brickDemolished");
	}
}



//----------------------------------------Score & Lives
var score = 0;
var lives = 10;

//----------------------------------------Bricks
var brickRowTotal = 7;
var brickColumnTotal = 6;
var bricksTotal = brickRowTotal * brickColumnTotal;
var bricks = [];//Brick Array

//Brick Position
var initialY = 0; // initial y
var initialX = 595; // initial x

// Brick Para
var brickLength = 15;
var brickHeight = 80;
var brickBorderRadius = 5;
var bricksXPadding = 10;
var bricksYPadding = 10;

//Brick Position Generator Array
for (let bc = 0; bc < brickColumnTotal; bc++) { //Brick Column array 
	bricks[bc] = [];
	initialY = 0;
	for (let br = 0; br < brickRowTotal; br++) { //Brick Row array
		bricks[bc][br] = {
			x: initialX, y: initialY,
		}
		initialY = initialY + bricksYPadding + brickHeight;
	}
	initialX += (30 + bricksXPadding);
}

//----------------------------------------Brick Array 2x2, redraw bricks in-position
function drawBricks(bricks) {
	var numCol = bricks.length; //Brick Column array variable
	var numRow = bricks[0].length; //Brick Row array variable

	for (let bc = 0; bc < numCol; bc++) {
		for (let br = 0; br < numRow; br++) {
			if (bricks[bc][br] && bricks[bc][br].x && bricks[bc][br].y) {
				bricks[bc][br].shape = paper.rect(bricks[bc][br].x, bricks[bc][br].y, brickLength, brickHeight, brickBorderRadius)
					.attr({
						gradient: "20-#ffffff-#7ebbce",
						stroke: "white",
						"stroke-width": 1,
						"stroke-linejoin" : "round",
					})
			}
		}
	}
}
//Function call
drawBricks(bricks)

//----------------------------------------------------PADDLE + CONTROLS

//----------------------------------------PADDLE RIGHT
var paddleRight = paper.rect(pWidth - 70, pHeight/2 - 60, 15, 125).attr(
	{
		gradient: "180-#606050-#98AB67",
		stroke: "#333333",
		"stroke-width": 2,
		"stroke-linejoin": "round",
	});

//RIGHT PADDLE CONTROLS (UP & DOWN) 
var keyUpR = "false";
var keyDownR = "false";

//RIGHT PADDLE CONTROLS EVENT LISTENER
document.addEventListener("keydown", function (e) {
	if (e.key == "ArrowUp") {
		console.log ("keydown ArrowUp")
		keyUpR = "true";
	}
	else if (e.key == "ArrowDown") {
		console.log ("keydown ArrowDown")
		keyDownR = "true";
	}
});

document.addEventListener("keyup", function (e) {
	if (e.key == "ArrowUp"){
		console.log ("keyup ArrowUp")
		keyUpR = "false";
	}
	else if (e.key == "ArrowDown"){
		console.log ("keyup ArrowDown")
		keyDownR = "false";
	}
});

//RIGHT PADDLE CONTROLS LOGIC
var keyboardcontrolsRight = function (keyboardcontrolsRight) {
	if (keyDownR == "true" && paddleRight.attr("y")  < pHeight - 125) {
		paddleRight.animate({ y: paddleRight.attr("y") + 10}, 0, "elastic");
		
	}
	else if (keyUpR == "true" && paddleRight.attr("y") > 0 ) {
		paddleRight.animate({ y: paddleRight.attr("y") - 10}, 0, "elastic");
	}
}

//----------------------------------------PADDLE LEFT
var paddleLeft = paper.rect(pWidth - 1345, pHeight/2 - 60, 15, 125).attr(
	{
		gradient: "0-#606050-#98AB67",
		stroke: "#333333",
		"stroke-width": 2,
		"stroke-linejoin": "round",
	});

//LEFT PADDLE CONTROLS (W & S) 
var keyUpL = "false";
var keyDownL = "false";

//LEFT PADDLE CONTROLS EVENT LISTENER
document.addEventListener("keydown", function (e) {
	if (e.key == "w") {
		console.log ("keydown w")
		keyUpL = "true";
	}
	else if (e.key == "s") {
		console.log ("keydown s")
		keyDownL = "true";
	}
});

document.addEventListener("keyup", function (e) {
	if (e.key == "w"){
		console.log ("keyup w")
		keyUpL = "false";
	}
	else if (e.key == "s"){
		console.log ("keyup s")
		keyDownL = "false";
	}
});

//LEFT PADDLE CONTROLS LOGIC
var keyboardcontrolsLeft = function (keyboardcontrolsLeft) {
	if (keyDownL == "true" && paddleLeft.attr("y") < pHeight - 125) {
		paddleLeft.animate({ y: paddleLeft.attr("y") + 10}, 0, "elastic");
		
	}
	else if (keyUpL == "true" && paddleLeft.attr("y") > 0 ) {
		paddleLeft.animate({ y: paddleLeft.attr("y") - 10}, 0, "elastic");
	}
}

//----------------------------------------------------BALL + BALL INTERACTIONS

//----------------------------------------BALL1
var ball1 = paper.circle(pWidth - 85, pHeight/2, 12).attr(
	{
		gradient: "90-#4E7314-#332316",
		stroke: "#382101",
		"stroke-width": 2,
		"stroke-linejoin": "round",
	});

//Ball1 Parameters
ball1.xpos = pWidth - 85;
ball1.ypos = pHeight / 2;
ball1.xrate = -4;
ball1.yrate = -4;

//----------------------------------------BALL2
var ball2 = paper.circle(pWidth - 1315, pHeight/2, 12).attr(
	{
		gradient: "90-#382101-#332316",
		stroke: "#332316",
		"stroke-width": 2,
		"stroke-linejoin": "round",
	});

//Ball2 Parameters
ball2.xpos = pWidth - 1315;
ball2.ypos = pHeight / 2;
ball2.xrate = 4;
ball2.yrate = 4;

//----------------------------------------BALL1 INTERACTIONS

//---------------------BAll1 HIT WAll = Reverse direction
var wallcollision1 = function (wallcollision1) 
{
	if (ball1.ypos <=0 ) 
	{
		ball1.yrate = - ball1.yrate;
		wallBallCollisionSound.play()
	};

	if (ball1.ypos >= pHeight ) 
	{
		ball1.yrate = - ball1.yrate;
		wallBallCollisionSound.play()
	};

//---------------------BAll1 CROSS BOUNDS = Lose lives
	if (ball1.xpos <= 0) 
	{ 
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else
		{
		lifelostSound.play()
		alert("You have " + lives + " more chance")
		ball1.xpos = pWidth - 1330;
		ball1.ypos = pHeight/2;
		ball1.xrate = 5;
		ball1.yrate = 5;
		}
	}

	if (ball1.xpos >= pWidth) 
	{
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else 
		{
			lifelostSound.play()
			alert("You have " + lives + " more chance")
			ball1.xpos = pWidth - 85;
			ball1.ypos = pHeight/2;
			ball1.xrate = -5;
			ball1.yrate = -5;
		}
	}
}

//---------------------BAll2 HIT WAll = Reverse direction
var wallcollision2 = function (wallcollision2) 
{

	if (ball2.ypos <=0 ) 
	{
		ball2.yrate = - ball2.yrate;
		wallBallCollisionSound.play()
	};

	if (ball2.ypos >= pHeight ) 
	{
		ball2.yrate = - ball2.yrate;
		wallBallCollisionSound.play()
	};


//---------------------BAll2 CROSS BOUNDS = Lose lives
	if (ball2.xpos <= 0) 
	{ 
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else
		{
		lifelostSound.play()
		alert("You have " + lives + " more chance")
		ball2.xpos = pWidth - 1330;
		ball2.ypos = pHeight/2;
		ball2.xrate = 5;
		ball2.yrate = 5;
		}
	}

	if (ball2.xpos >= pWidth) 
	{
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else 
		{
			lifelostSound.play()
			alert("You have " + lives + " more chance")
			ball2.xpos = pWidth - 85;
			ball2.ypos = pHeight/2;
			ball2.xrate = -5;
			ball2.yrate = -5;
		}
	}
	
//---------------------BAll HIT Paddle = Reverse direction + Random speed

// Balls Hit Paddle Right
var paddlebounceRight = function (paddlebounceRight) {
	if (ball1.xpos >= pWidth - 67) {
		if (ball1.ypos >= paddleRight.attr("y") && ball1.ypos <= paddleRight.attr("y") + 125) {
			ball1.xrate = - ball1.xrate;
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball1 will be too predictable */
			ball1.yrate = (ball1.yrate + getRandomNum(0, 2))
			paddleBallCollisionSound.play()
		}
	};

	if (ball2.xpos >= pWidth - 67) {
		if (ball2.ypos >= paddleRight.attr("y") && ball2.ypos <= paddleRight.attr("y") + 125) {
			ball2.xrate = - ball2.xrate;
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball2 will be too predictable */
			ball2.yrate = (ball2.yrate + getRandomNum(0, 2))
			paddleBallCollisionSound.play()
		}
	};
}

// Balls Hit Paddle Left
var paddlebounceLeft = function (paddlebounceLeft) {
	if (ball1.xpos <= pWidth - 1327) {
		if (ball1.ypos >= paddleLeft.attr("y") && ball1.ypos <= paddleLeft.attr("y") + 125) {
			ball1.xrate = - ball1.xrate;
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball1 will be too predictable */
			ball1.yrate = (ball1.yrate + getRandomNum(0, 2))
			paddleBallCollisionSound.play()
		}
	};

	if (ball2.xpos <= pWidth - 1327) {
		if (ball2.ypos >= paddleLeft.attr("y") && ball2.ypos <= paddleLeft.attr("y") + 125) {
			ball2.xrate = - ball2.xrate;
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball2 will be too predictable */
			ball2.yrate = (ball2.yrate + getRandomNum(0, 2))
			paddleBallCollisionSound.play()
		}
	};

}



//---------------------BAllS HIT Bricks = Brick destroyed + Point increase + Reverse direction
var brickcollision = function () {//Brick locator and brick lenght+height identifier
	for (let bc = 0; bc < brickColumnTotal; bc++) {
		for (let br = 0; br < brickRowTotal; br++) {

			var brick_posX = bricks[bc][br].x;
			var brick_posY = bricks[bc][br].y;

			var brick_x_length = brick_posX ? brick_posX + brickLength : null;
			var brick_y_length = brick_posY ? brick_posY + brickHeight : null; 

			if (ball1.xpos > brick_posX //ball1 hit brick logic
				&& ball1.xpos < brick_x_length
				&& ball1.ypos > brick_posY
				&& ball1.ypos < brick_y_length) {

				brickBallCollisionSound.play();
				bricks[bc][br].shape.remove();
				bricks[bc][br].x = null;
				bricks[bc][br].y = null;
				console.log("brickDemolished");
				
				score ++

				ball1.xrate = - ball1.xrate
				ball1.yrate = - ball1.yrate
			}

			if (ball2.xpos > brick_posX //ball2 hit brick logic
				&& ball2.xpos < brick_x_length
				&& ball2.ypos > brick_posY
				&& ball2.ypos < brick_y_length) {

				brickBallCollisionSound.play();
				bricks[bc][br].shape.remove();
				bricks[bc][br].x = null;
				bricks[bc][br].y = null;
				console.log("brickDemolished");
				
				score ++

				ball2.xrate = - ball2.xrate
				ball2.yrate = - ball2.yrate
		}
	}
}


//----------------------------------------------------SOUND
var gameoverSound = new Audio("resources/audio/gameover.wav")
var lifelostSound = new Audio("resources/audio/loselife.flac")
var paddleBallCollisionSound = new Audio("resources/audio/paddleballcollision.wav")
var wallBallCollisionSound = new Audio("resources/audio/wallballcollision.wav")
var brickBallCollisionSound = new Audio("resources/audio/brickballcollision.ogg")
var winSound = new Audio("resources/audio/gamewin.mp3")

//----------------------------------------------------Display 
// Display Score & Lives on HTML
var scoreDisp = document.getElementById("gameScore")
var livesDisp = document.getElementById("displayLives")

function drawScore() {
	scoreDisp.innerHTML = score;
}

function drawLives() {
	livesDisp.innerHTML = lives;
}

// Display Timer on HTML
var timeDisp = document.getElementById("gameTime")

function drawTime () {
	timeDisp.innerHTML = totaltime;
}

//------//
//-DONE-//
//------//

//----------------------------------------------------HELPER FUNCTIONS
var totaltime;

// Function for Rand Num in range
function getRandomNum(min, max) {
	var num = (Math.random() * (max - min + 1)) + min;
	return num ? num : getRandomNum(min, max);
}

//Reset Function
var ResetGame = function (ResetGame) {
	clearInterval(timer);

	ball2.xpos = pWidth / 2;
	ball2.ypos = pHeight - 100;
	ball2.xrate = -5;
	ball2.yrate = -5;

	ball1.xpos = pWidth / 2;
	ball1.ypos = pHeight - 100;
	ball1.xrate = -5;
	ball1.yrate = -5;
}

//Game over Function
var gameover = function (gameover) {
	gameoverSound.play()
	if(confirm('Game Over, Try again?')){
		window.location.reload();
	}
	ResetGame();
};

//Game win Function
var gamewin = function (gamewin) {
	if (score == bricksTotal) {
		winSound.play()
		if(confirm('You Win! Your time is ' + totaltime + 's')) {
			window.location.reload();
	}
	ResetGame();
	}
}

//Game Time Function
var gametime = function(gametime) {
	totaltime = (Date.now() - startTime)/1000;
}




//----------//
//Refrences//
//--------//

//Scroll Lock src: https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);


//----------------------------------------------------DEBUG

/*paper.rect(pWidth-10, pHeight-10, 5, 5).attr(
		{
			"fill": "red",
		});

paper.rect(-pWidth+80, -pHeight+80, 5, 5).attr(
			{
				"fill": "blue",
			});
*/

function printMousePos(event) {
	console.log(	  
		"clientX: " + event.clientX + " " +
		"clientY: " + event.clientY + " " +
		"pWidth: " + pWidth + "pHeight: " + pHeight
		)
  }
  
  document.addEventListener("click", printMousePos);
}}