function add(x, y) {return x + y}
function substract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}

function operate(x, operator, y) {
	console.log(window[operator]);
	return window[operator](x, y);
}

var outputDisplay = document.querySelector("#output");

var x = "0";
var operator = "";
var y = new String;

var operators = Array.from(document.querySelectorAll(".operator")).map((btn) => btn.id);

function display(button) {
	if (outputDisplay.textContent == "0") {
		outputDisplay.textContent = "";
	}
	if (button.id == "clear") {
		outputDisplay.textContent = "0";
		x = "0";
		y = "";
		operator = "";
	}
	if (button.id != "equals") {
		outputDisplay.textContent += button.textContent;
		if (operators.includes(button.id)) {
			operator = button.id;
			console.log(operator);
		} else {
			if (operator == "") {
				x = x.concat(button.textContent);
			} else {
				y = y.concat(button.textContent);
			}
		}
	} else {
		result = operate(Number(x), operator, Number(y))
		outputDisplay.textContent = result;
		x = result;
		y = "";
		operator = "";
	}
}

var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		display(button);
	})
});

