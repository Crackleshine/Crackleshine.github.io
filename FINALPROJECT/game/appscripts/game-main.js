//console.log("yo, I'm alive!");
var paper = new Raphael(document.getElementById("gameArea"));

//Paper dimensions
var pWidth = paper.width;
var pHeight = paper.height;

//----------------------------------------------------GAME START/DRIVER/GAME TIME FUNCTION
var gameState = "off";
var timer;
var timerStart = "false";
var startTime;


//Start Button
document.getElementById("startButtonID").addEventListener('click', function (e) {
	if (gameState == "off") {
		timer = setInterval(draw, 10);
		gameState = "on";
		timerStart = "true";
		if (timerStart == "true") {
			startTime = Date.now();
			console.log("Start time = " + startTime)
		}

	}
	else {
		clearInterval(timer);
		gameState = "off"
		window.location.reload();
	}
})


//----------------------------------------------------GAME CONFIG

//----------------------------------------Background Canvas + Stroke
var bg = paper.rect(0, 0, pWidth, pHeight).attr(
	{
		"stroke-width": 15,
		//"stroke": "#522a0c",
		"stroke-linecap": "round"
	}
)


//----------------------------------------Score & Lives
var score = 0;
var lives = 10;

//----------------------------------------Bricks
var brickRowTotal = 6;
var brickColumnTotal = 10;
var bricksTotal = brickRowTotal * brickColumnTotal;
var bricks = [];//Brick Array

//Brick Position
var initialY = 500; // initial y
var initialX = 450; // initial x

// Brick Para
var brickLength = 15;
var brickHeight = 80;
var brickBorderRadius = 5;
var bricksXPadding = 20;
var bricksYPadding = 25;

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
var keyboardcontrolsRight = function () {
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
var keyboardcontrolsLeft = function () {
	if (keyDownL == "true" && paddleLeft.attr("y") < pHeight - 125) {
		paddleLeft.animate({ y: paddleLeft.attr("y") + 10}, 0, "elastic");
		
	}
	else if (keyUpL == "true" && paddleLeft.attr("y") > 0 ) {
		paddleLeft.animate({ y: paddleLeft.attr("y") - 10}, 0, "elastic");
	}
}

//----------------------------------------------------BALL + BALL INTERACTIONS

//----------------------------------------BALL
var ball = paper.circle(pWidth - 85, pHeight/2, 12).attr(
	{
		//gradient: "90-#4E7314-#332316",
		fill: "#c58837",
		stroke: "#382101",
		"stroke-width": 2,
		"stroke-linejoin": "round",
	});

//Ball Parameters
ball.xpos = pWidth - 85;
ball.ypos = pHeight / 2;
ball.xrate = -4;
ball.yrate = -4;

//----------------------------------------BALL INTERACTIONS

//---------------------BAll HIT WAll = Reverse direction
var wallcollision = function () 
{
	if (ball.ypos <=0 ) 
	{
		ball.yrate = - ball.yrate;
		wallBallCollisionSound.play()
	};

	if (ball.ypos >= pHeight ) 
	{
		ball.yrate = - ball.yrate;
		wallBallCollisionSound.play()
	};

/* 
//---------------------BAll HIT WAll = Reverse direction (make collisions more unpredictable?)
var wallcollision = function (wallcollision) 
{
	if (ball.ypos <=10 ) 
	{
		ball.yrate = - (ball.yrate + getRandomNum(0, 2));
		wallBallCollisionSound.play()
		console.log("triggered")
	};

	if (ball.ypos >= pHeight-10 ) 
	{
		ball.yrate = - (ball.yrate + getRandomNum(0, 2));
		wallBallCollisionSound.play()
		console.log("triggered")
	};
*/

//---------------------BAll CROSS BOUNDS = Lose lives
//Ball Die left
	if (ball.xpos <= 0) 
	{ 
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else
		{
		lifelostSound.play()
		console.log("You have " + lives + " more chances")
		ball.xpos = pWidth - 1315;
		ball.ypos = pHeight/2;
		ball.xrate = 0;
		ball.yrate = 0;

		document.addEventListener("keydown", function (e) {
			if (ball.xrate == 0 && ball.xpos == pWidth - 1315 && e.key == " ") {
				ball.xpos = pWidth - 1315;
				ball.ypos = pHeight/2;
				ball.xrate = 5;
				ball.yrate = -5;
			}
		});
		}
	}

//Ball Die Right
	if (ball.xpos >= pWidth) 
	{
		lives--;
		if(lives==0) 
		{
			gameover()
		}
		else 
		{
			lifelostSound.play()
			console.log("You have " + lives + " more chances")
			ball.xpos = pWidth - 85;
			ball.ypos = pHeight/2;
			ball.xrate = 0;
			ball.yrate = 0;

			document.addEventListener("keydown", function (e) {
				if (ball.xrate == 0 && ball.xpos == pWidth - 85 && e.key == " ") {
					ball.xpos = pWidth - 85;
					ball.ypos = pHeight/2;
					ball.xrate = -5;
					ball.yrate = -5;
				}
			});
		}
	}
}
	
//---------------------BAll HIT Paddle = Reverse direction + Random speed
//src: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection

// Ball Hit Paddle Right
var paddlebounceRight = function () {
	if (ball.xpos >= pWidth - 70) {
		if (ball.ypos >= paddleRight.attr("y") && ball.ypos <= paddleRight.attr("y") + 125) {
			ball.xrate = - (ball.xrate + getRandomNum(0, 1));
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball will be too predictable */
			ball.yrate = (ball.yrate + getRandomNum(0, 1));
			paddleBallCollisionSound.play()
		}
	};
}

// Ball Hit Paddle Left
var paddlebounceLeft = function () {
	if (ball.xpos <= pWidth - 1320) {
		if (ball.ypos >= paddleLeft.attr("y") && ball.ypos <= paddleLeft.attr("y") + 125) {
			ball.xrate = - (ball.xrate + getRandomNum(0, 1));
			/* Multiply  xrate with a random number (btw 0 - 0.2) upon each collision with the paddle, 
			otherwise the angle and speed of the ball will be too predictable */
			ball.yrate = (ball.yrate + getRandomNum(0, 1));
			paddleBallCollisionSound.play()
		}
	};
}

//---------------------BAll HIT Bricks = Brick destroyed + Point increase + Reverse direction
var brickcollision = function () {//Brick locator and brick lenght+height identifier
	for (let bc = 0; bc < brickColumnTotal; bc++) {
		for (let br = 0; br < brickRowTotal; br++) {

			var brick_posX = bricks[bc][br].x;
			var brick_posY = bricks[bc][br].y;

			var brick_x_length = brick_posX ? brick_posX + brickLength : null;
			var brick_y_length = brick_posY ? brick_posY + brickHeight : null; 

			if (ball.xpos > brick_posX //ball hit brick logic
				&& ball.xpos < brick_x_length
				&& ball.ypos > brick_posY
				&& ball.ypos < brick_y_length) {

				brickBallCollisionSound.play();
				bricks[bc][br].shape.remove();
				bricks[bc][br].x = null;
				bricks[bc][br].y = null;
				console.log("brickDemolished");
				
				score ++

				ball.xrate = - (ball.xrate + getRandomNum(0, 1))
				ball.yrate = - (ball.yrate + getRandomNum(0, 1))
			}
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

//----------------------------------------------------HELPER FUNCTIONS
var totaltime;

// Function for Rand Num in range
function getRandomNum(min, max) {
	var num = (Math.random() * (max - min + 1)) + min;
	return num ? num : getRandomNum(min, max);
}

//Reset Function
var ResetGame = function () {
	clearInterval(timer);
	ball.xpos = pWidth / 2;
	ball.ypos = pHeight - 100;
	ball.xrate = -3;
	ball.yrate = -3;
}

//Game over Function
var gameover = function () {
	gameoverSound.play()
	if(confirm("Nice work mate, your score is " + score + ". Try again?" )){
		window.location.reload();
	}
	ResetGame();
};

//Game win Function
var gamewin = function () {
	if (score == bricksTotal) {
		winSound.play()
		if(confirm("You Win! Your time is " + totaltime + "s")) {
			window.location.reload();
	}
	ResetGame();
	}
}

//Game time Function
var gametime = function() {
	totaltime = (Date.now() - startTime)/1000;
}

//----------------------------------------Draw the game; run in loop
var draw = function () {
	ball.xpos += ball.xrate;
	ball.ypos += ball.yrate;
	ball.attr({ 'cx': ball.xpos, 'cy': ball.ypos });

	wallcollision();
	paddlebounceRight();
	paddlebounceLeft();
	brickcollision();
	keyboardcontrolsRight();
	keyboardcontrolsLeft ();

	drawScore();
	drawLives();
	drawTime();
	gamewin();
	gametime();
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
window.addEventListener("keyup",
    function(e){
        keys[e.keyCode] = false;
    },
false);


//Get Location
function printMousePos(event) {
	console.log(	  
		"clientX: " + event.clientX + " " +
		"clientY: " + event.clientY + " " +
		"pWidth: " + pWidth + "pHeight: " + pHeight
		)
  }
  
  document.addEventListener("click", printMousePos);