let output = document.querySelector("#output")

let x = 0
let operator = undefined
let y = ""

function operate(x = 0, operator, y = 0) {
	if (operator == "+") {
		result = Number(x) + Number(y)
	} else if (operator == "-") {
		result = x - y
	} else if (operator == "*") {
		result = x * y
	} else if (operator == "/") {
		result = x / y
	}
	x = result
	y = ""
	operator = undefined
	return result
}

function display(input) {
	if (output.textContent == "0") {
		output.textContent = ""
	}
	if (input.id == "clear") {
		output.textContent = operate()
	} else {
		if (input.id != "equals") {
			output.textContent += input.textContent
			if (operators.includes(input.textContent)) {
				operator = input.textContent
			} else {
				if (operator == undefined) {
					x = x.concat(input.textContent)
				} else {
					y = y.concat(input.textContent)
				}
			}
		} else {
			output.textContent = operate(x, operator, y)
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