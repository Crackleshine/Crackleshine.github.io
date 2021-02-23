// main.js

console.log(`yo`);

/* assign3: font family for article in RJavaScript */
document.getElementById("articleID").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
document.getElementById("headerID").style.textAlign = "center";


//--------------------------------------------------------------
//Part 1
//function greetings() {
	//console.log("Hello")
	//headertext.innerText = "Hello"}

//greetings()

//But i dun get it
//function myfunction() {
	//Javascript String Interpolation
	//headertext.innerText = `Counter: $(Counter)`}


//Part 1 q2
var headertext = document.getElementById ("headerID")
headerID.innerText = "Bye";

var contentChanger= function() {
	newheaderID = headerID.innerText + "Hello!";
	headerID.innerText = newheaderID}


//Part 2 q3 
//decalre
var counter
//intalizing
counter=0

var navtext = document.getElementById ("nav")
nav.innerText = "The Count begins";

var counting = function(){
	counter = counter + 1;
	counter *= 100;
	nav.innerHTML= "OK, I have now received " +counter+ " clicks"
	//alt = nav.innerHTML = `OK, I have now received ${counter}00 click(s)`  - true fakes

}

//Part 3
function slipnslide() {
	var slider = document.getElementById ('slider') //return number
	console.log (slider.value)
	var headerElement = document.getElementById("headerID")
	var value= Math.floor(slider.value*255)	
	headerElement.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
}

