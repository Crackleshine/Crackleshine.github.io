console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
// A "convenience" method for putting graphical objects back on a paper after they have been removed or "cleared"
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}

// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);


//  get a rectangle equal to the size of the paper to raw on

// Create rectangle to fill the paper to use as a background 
var prect = paper.rect(0,0, pWidth, pHeight);
prect.attr({"fill": "#F1ECD6"}); 


// Draw circles where mouse is clicked
//----------------------------------------------------------
//                CREATE NEW OBJECT ON CLICK
//----------------------------------------------------------

var circleRadius = 12;

prect.node.addEventListener('click', function(ev){
	drawCircle(ev, circleRadius);

});

// Task 2.2 slider on aside panel
//  first add slider to index.html with id="slider1"
// HTML range slider to set size of circles to draw when we click
var radSlider = document.getElementById("radSlider");

radSlider.addEventListener('input', function(ev){
	circleRadius = 2 + 20*radSlider.value; 
});

// HTML button to clear canvas of (some) drawings
var clearButton=document.getElementById("clearButton"); 

clearButton.addEventListener('click', function(ev){
	paper.clear();
	//paper.put(prect);
	//paper.put(circle);
});



//----------------------------------------------------------
//                  Session06 assignment starts here
//----------------------------------------------------------


// Part 1 
//----------------------------------------------------------
//                Add event listeners for the new slider and button
//----------------------------------------------------------

//lightness slider
var lightnessValue = document.getElementById("lightSlider")
lightnessValue.addEventListener("change", function(ev){
    console.log(lightnessValue.value);
    //dot2Radius = dot2Slider.value;
});

//recolor\ur button
var recolour = document.getElementById("recolorButton")
recolorButton.addEventListener("click", function(ev){
	console.log("recolorButtonclicked");
	changeColor();
    //dot2Radius = dot2Slider.value;
});


// Part 2 and 3 

//----------------------------------------------------------------------------------------------

//                First, define the circleColor variable we need
//                Then, call the map function three times,
//                and then finally call the hslString function one time.
//                Finally, set the color of the circle using localCircle.attr();
//----------------------------------------------------------------------------------------------

function drawCircle(ev, circleRadius)
{
		// simply draws a circle using the arguments
		//note that it takes in one object and one number

		var localCircle = paper.circle(ev.offsetX, ev.offsetY, circleRadius); //localCircle has a local scope

	//                First, define the circleColor variable we need

		var circleColor = {};
		
	//                Then, call the map function three times,
		circleColor.hue = map (ev.offsetX, 0, pWidth, 0, 359);
		circleColor.saturation = map (ev.offsetY, 0, pHeight, 0, 100);
		circleColor.lightness = map (lightnessValue.value, 0, 1, 0, 100)

		console.log (circleColor.hue , circleColor.saturation, circleColor.lightness);

	//                and then finally call the hslString function one time.
	function hslString(){
		var h = circleColor.hue;
		var s = circleColor.saturation;
		var l = circleColor.lightness;
		var input = "hsl(" + h.toString() + "," + s.toString() + "," + l.toString() + ")";
		console.log("hsl(" + h.toString() + "," + s.toString() + "," + l.toString() + ")");
		return input;
		
	}


	//                Finally, set the color of the circle using localCircle.attr();
	
		localCircle.attr({
        fill: hslString()
    });
}



//----------------------------------------------------------------------------------------------
//               No changes to the map function, but you will call it in the drawCircle function. 
//               Map one number into the correct range according to the provided arguments
//               Returns one number
//----------------------------------------------------------------------------------------------

// maps x in  the interval [a,b] into the interval [m, n]
function map(x, a, b, m, n){
    var range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    var proportion = (x-a)/(b-a); 
    var finalMappedValue = Math.floor(m + proportion*range);

    return (finalMappedValue);
}



//----------------------------------------------------------------------------------------------------------
//                Change the HSL function so that it takes in one argument.
//                Set h,s, and l according to the hue, saturation, lightness properties of the input argument
//                Returns one string
//----------------------------------------------------------------------------------------------------------


//                Change the HSL function so that it takes in one argument.
function hslString(){
	var h;
	var s;
	var l;
	var input = "hsl(" + h.toString() + "," + s.toString() + "%," + l.toString() + "%)";
	console.log("hsl(" + h.toString() + "," + s.toString() + "%," + l.toString() + "%)");
	return input;
	
}


// Part 4 Model and Controller
//----------------------------------------------------------
//                changeColor function
//                First, this function will create a list of circles by using document.getElementsByTagName.
//----------------------------------------------------------

function changeColor(){


	//	First, this function will create a list of circles by using document.getElementsByTagName.

	var circleList = document.getElementsByTagName("circle");

	//	Now, you can access the fill color of each circle

	for (x in circleList){

		if(circleList[x].attributes != null){

		var filledValue = circleList[x].style.fill;  
		console.log(x);
	
		circleList[x].style.fill = "red"; 

		};
		
	};


};














