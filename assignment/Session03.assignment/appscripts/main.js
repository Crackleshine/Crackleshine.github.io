// main.js

console.log(`yo`);

//Give your articletext a font family 
var elementId = document.getElementById("articletext")
.style.fontFamily = "Veranda,sans-serif";

//center the word Header(Articles of Text) in its element
document.getElementById("headertext").style.textAlign = "center";

//Bonus Round 1
var elementId = document.getElementById("styletext")
.style.fontFamily = "italic bold, Courier, sans-serif";

////Bonus Round 2 (Sorry I gave up)
////var appendedtext = document.getElementById("styletext");
//var appendedtext = document.createElement("styletext");
//appendedtext.innerHTML = "<p>ENTERING DYNAMICALLY</p>";
////document.getElementById("styletext").appendChild(textnode);