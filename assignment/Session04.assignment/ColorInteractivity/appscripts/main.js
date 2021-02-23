// main.js

console.log(`yo`);

/* assign3: font family for article in JavaScript */
var art=document.getElementById("articleid").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
var art=document.getElementById("headerid").style.textAlign = "center";

//hslString
hslString = function(hue, saturation, lightness){
	//hsl_String = `hsl( ${hue} + ${saturation}% + ${lightness}%)`;
    //console.log(`Your hsl string is HSL (H: + ${hue} + S: + ${saturation}% + ,L: + ${lightness}%))`; - Sorry, I tried but i can't get it to work :(
    HSLString = "hsl(" + hue + "," + saturation + "%," + lightness + "%)"; // Probably a conflict between the 'hslString' being in too many places i changed it but i don't seem to know how this works
	console.log("HSL string is (H:" + hue + ",S:" + saturation + "%,L:" + lightness + "%)") 
	return HSLString;
};

//Globally-scopped HSL values
var hueSlider = document.getElementById("hueSliderID");
var satSlider = document.getElementById("satSliderID");
var lightSlider = document.getElementById("lightSliderID");

var headercolor = document.getElementById("headerid");

//Hue 
hueSlider.addEventListener("change", function huechange(hsl){
	hue = Math.floor(hueSlider.value*360);
	saturation = Math.floor(satSlider.value*100);
    lightness =  Math.floor(lightSlider.value*100);
    console.log ("Hue is" + " " + hue);

	headercolor.style.background = hslString(hue, saturation, lightness);
});

//Saturation 
satSlider.addEventListener("change", function satchange(hsl){
	hue = Math.floor(hueSlider.value*360);
	saturation =  Math.floor(satSlider.value*100);
    lightness = Math.floor(lightSlider.value*100);
    console.log ("Saturation is" + " " + saturation);

	headercolor.style.background = hslString(hue, saturation, lightness);
});

//Lightness 
lightSlider.addEventListener("change", function lightchange(hsl){
	hue = Math.floor(hueSlider.value*360);
	saturation =  Math.floor(satSlider.value*100);
    lightness = Math.floor(lightSlider.value*100);
    console.log ("Lightness is" + " " + lightness);

	headercolor.style.background = hslString(hue, saturation, lightness);
});


//Opacity
let opacitySlider = document.getElementById("opacitySliderID");

opacitySlider.addEventListener("change", function(){
	headercolor.style.opacity = opacitySlider.value;
})

//Mousedown
headercolor.addEventListener("mousedown", function(){
	headercolor.style.opacity = opacitySlider.value;
});

//Mouseup
headercolor.addEventListener("mouseup", function(){
    headercolor.style.opacity = opacitySlider.value;
});
