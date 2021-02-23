
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
var canvas = document.getElementById("mySVGCanvas");

var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;

console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
var prect = paper.rect(0,0, pWidth, pHeight);

let raphaelPath;
let pathString = "M "+pWidth/2+","+pHeight/2;

//click addEventListener and pathString prep
canvas.addEventListener("click", function(ev){
    console.log("draw");
    pathString = pathString + " L " + ev.offsetX  + "," + ev.offsetY
	console.log("pathString is:" + pathString);
	connect()
});

//connect pathStrings
function connect() {
    var drawnewline = paper.path(pathString);
    drawnewline.attr({ 'arrow-end': 'diamond-wide-long' }) 
    //console.log(drawnewline)
};

//Clear button
var reset = document.getElementById("resetbutton")
reset.addEventListener("click",function(ev){
    console.log("cleanup");
	paper.clear();
	pathString = "M "+pWidth/2+","+pHeight/2;
});