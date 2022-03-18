let output = document.querySelector("#output")

let x = "0"
let operator = undefined
let y = ""

function operate(x = "0", operator, y = "0") {
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
	console.log(x, operator, y)
	return result
}

function display(input) {
	// if (output.textContent == "0") {
	// 	output.textContent = ""
	// }
	if (input.id == "clear") {
		output.textContent = operate()
	} else {
		if (input.id != "equals") {
			if (input.classList.contains('operator')) {
				operator = input.textContent
			} else {
				if (operator == undefined) {
					x = x.concat(input.textContent)
				} else {
					if (y == '') {
						output.textContent = ''
					}
					y = y.concat(input.textContent)
				}
				output.textContent = Number(output.textContent + input.textContent)
			}
		} else {
			output.textContent = operate(x, operator, y)
		}
	}
	console.log(x, operator, y)
}

let buttons = document.querySelectorAll("button")

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		display(button)
	})
})

module.exports = operate