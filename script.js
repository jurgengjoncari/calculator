function add(x, y) {return x + y}
function substract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}

function operate(x, operator, y) {return operator(x, y);}
function display(v) {
	output = document.querySelector("#output");
	if (

let x = document.querySelector();
let buttons = document.querySelectorAll("button");
var value;
buttons.forEach(button, function () {
	button.addEventListener("click", function () {
		value = button.id;
		display(value);
	})
});

display(value);
