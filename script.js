function add(x, y) {return x + y}
function substract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}

function operate(x, operator, y) {operator(x, y);}

var input = 0;

var x = new String;
var operator = undefined;
var y = new String;

var buttons = document.querySelectorAll("button");

var outputDisplay = document.querySelector("#output");

var operators = Array.from(document.querySelectorAll(".operator")).map((btn) => btn.id);
console.log(operators);
function display(input) {
	if (outputDisplay.textContent == "0") {
		outputDisplay.textContent = "";
	}
	if (input != "equals") {
		outputDisplay.textContent += input;
		if (operators.includes(input)) {
			operator = input;
			console.log(operator);
		} else {
			if (operator == undefined) {
				x.concat(input);
			} else {
				y.concat(input);
			}
		}
	} else {
		console.log(operator);
		outputDisplay.textContent = operate(Number(x), operator, Number(y));
	}
}

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		input = button.id;
		display(input);
	})
});

