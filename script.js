var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log("answer", _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// body.addEventListener("load", function() {
// 	setGradient();
// })

var randomNumber = Math.floor(Math.random()*16);
var randomButton = document.createElement("button");
randomButton.textContent = "Click me";
document.body.appendChild(randomButton);


function generateColor() {
	const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	var code = "";
for (var i = 0; i < 6; i++) {
	code += hexArray[Math.floor(Math.random()*16)];
}

return `#${code}`
}

function setRandomColors() {
	color1.value = generateColor()
	color2.value = generateColor()
}

window.addEventListener("load", setRandomColors);

randomButton.addEventListener("click", setRandomColors);



