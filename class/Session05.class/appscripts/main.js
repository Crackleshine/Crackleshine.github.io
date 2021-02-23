// Code and Draw (review)

console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
// paper.put(raphObj) - puts Raphel elements back ona paper after it has been paper.clear()'ed
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}


// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

//------------------------------------//

//1.1 Create a variable for a Raphael rectangle to fill the paper to use as a background; set its fill attribute.
var rec = paper.rect (0, 0, pWidth, pHeight);
rec.attr({
    fill: "#91A8d0",
    stroke: "#84DCCF",
    "stroke-width": 1
});


//1.2 Create a variable for a Raphael circle at the center of the canvas. Set some attributes.
var dot = paper.circle(210, 210, 50); //circle (x-axis, y-axis, radius)
dot.attr({
    fill: "#DBD56E",
    stroke: "#2D93AD",
    "stroke-width": 3
});

//1.3 Use ‘mousedown’, ‘mousemove’, and ‘mouseup’ events so the user can drag the circle around the canvas.
var mouseIsDown = 0; //global scope
 dot.node.addEventListener("mouseup", function(ev){
     //console.log("mouseup");
     mouseIsDown = 0;
 });

 dot.node.addEventListener("mousedown", function(ev){
     //console.log("mousedown");
     mouseIsDown = 1;
 });
 
 dot.node.addEventListener("mousemove", function(ev){
    //console.log("mousemove");
    dot.node.addEventListener("mousemove", function(ev){
        //console.log(event) //show you options on what you can do with the function
    
        if(mouseIsDown==1)// double== '==' to checkl single '=' to assign
     {
         dot.attr ({cx: event.offsetX, cy: event.offsetY})
     }

        else
     {
         
     }
    });
});
//2.1 Create a variable called circleRadius, Initialize it to a value
var dot2Radius = 10

//2.2 Draw circles on the paper where mouse clicks are made. 
//Use circleRadius to set the size of the circle when you create them in your callback function.

centerDiv.addEventListener("click", function(ev){
    console.log("clickytime");
    var dot2 = paper.circle(50, 50, dot2Radius)
    dot2.attr({
        fill: "#DBD56E",
        stroke: "#2D93AD",
        "stroke-width": 3
    });
    dot2.attr ({cx: event.offsetX, cy: event.offsetY})
});

//2.6 Use the slider to change the circleRadius value
var dot2Slider = document.getElementById("dot2SliderID")
dot2Slider.addEventListener("change", function(ev){
    console.log(dot2Slider.value);
    dot2Radius = dot2Slider.value;
    //console.log (dot2Radius2);
});

//2.8 Use the clear button to remove elements from the paper (calling Raphael’s paper.clear())
var CLEAR = document.getElementById("CLEARbutton")
CLEAR.addEventListener("click", function(ev){
    console.log("CLEAR");
    paper.clear();
});

//2.9. Restore the background and circle elements to the paper after clearing everything
var RESTORE = document.getElementById("RESTOREbutton")
RESTORE.addEventListener("click", function(ev){
    console.log("RESTORE");
    paper.put(rec)
    paper.put(dot)
});