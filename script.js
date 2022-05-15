import Calculator from './calculator.js'

const calculator = new Calculator

const digitButtons = document.querySelectorAll('[data-digit]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const decimalButton = document.querySelector('[data-decimal]')

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendDigit(button.textContent)
        calculator.updateDisplay()
    })
})

decimalButton.addEventListener('click', () => {
    calculator.appendDecimal()
    calculator.updateDisplay()
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.setOperator(button.textContent)
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

document.addEventListener('keydown', function (event) {
    if (event.key.match(/^[0-9]+$/)) {
        calculator.appendDigit(event.key)
        calculator.updateDisplay()
    }
    if (event.key.match(/[+\-*\/]/)) {
        calculator.setOperator(event.key)
    }
    if (event.key == '.') {
        calculator.appendDecimal()
        calculator.updateDisplay()
    }
    if (event.key == '=' || event.key == 'Enter') {
        calculator.compute()
        calculator.updateDisplay()
    }
    if (event.key == 'Backspace') {
        calculator.delete()
        calculator.updateDisplay()
    }
})