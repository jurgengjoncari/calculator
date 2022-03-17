let output = document.querySelector("#output")

let x = 0
let operator = undefined
let y = ""

let operators = ["+", "-", "*", "/"]

function operate(operator, y = 0, x = 0) {
	if (operator == "+") {
		return Number(x) + Number(y)
	}
	if (operator == "-") {
		return x - y
	}
	if (operator == "*") {
		return x * y
	}
	if (operator == "/") {
		return x / y
	}
}

function display(input) {
	if (output.textContent == "0") {
		output.textContent = ""
	}
	if (input.id == "clear") {
		output.textContent = 0
		x = "0"
		y = ""
		operator = undefined
	} else {
		if (input.id != "equals") {
			output.textContent += input.textContent
			if (operators.includes(input.textContent)) {
				operator = input.textContent;
			} else {
				if (operator == undefined) {
					x = x.concat(input.textContent)
				} else {
					y = y.concat(input.textContent)
				}
			}
		} else {
			result = operate(x, operator, y)
			output.textContent = result
			result = 0
			x = result
			y = ""
			operator = undefined
		}
	}
}

let buttons = document.querySelectorAll("button")

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		display(button)
	})
})

module.exports = operate