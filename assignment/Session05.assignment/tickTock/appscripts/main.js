
console.log("yo, I'm alive!");

var centerDiv = document.getElementById("mySVGCanvas");
var paper = new Raphael(centerDiv);
// Find get paper dimensions
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;

// set tick and tock locations
 var tickcircle = paper.circle (200, 50, 15);
 tickcircle.attr({
    fill: "#91A8d0",
    stroke: "black",
    "stroke-width": 1
});
 var tockcircle = paper.circle (400, 50, 15);
 tockcircle.attr({
    fill: "#91A8d0",
    stroke: "black",
    "stroke-width": 1
});

 var tickX = 200 ;
 var tickY = 50;
 var tick = "200 50" 
 var tockX = 400 ;
 var tockY = 50;
 var tock = "400 50" 
  
//Draw tick/tock text
var tickText = paper.text( 200, 80, "Tick" )
var tockText = paper.text( 400, 80, "Tock" )

//starting circle
var axis = paper.circle (pWidth/2, pHeight/2, 40);
axis.attr({
    fill: "#91A8d0",
    stroke: "black",
    "stroke-width": 1
});
//var axisText = paper.text( pWidth/2, pHeight/2, "Click to draw" )
//--------------------------------------------------
// function to draw needle pointing to a location


 // Create the needle
 var needle = paper.path("M" + pWidth/2 + " " +pHeight/2+ "L" +tick+ "Z");
 needle.attr({ 'arrow-end': 'diamond-wide-long' }) 
 
// Create a variable to keep track of the state of the needle
var needleAtTick = 1; //global scope

centerDiv.addEventListener("click", function(ev){
    if(needleAtTick==1)
   {
    needle.attr({"path":"M" + pWidth/2 + " " +pHeight/2+ "L" +tock+ "Z"});
    //var tick = tock //how to reassign values?
    needleAtTick=0
    console.log("Tickclick");
   }

  else 
   {
    needle.attr({"path":"M" + pWidth/2 + " " +pHeight/2+ "L" +tick+ "Z"});
    console.log("Tockclick");
    needleAtTick=1;
   }
});