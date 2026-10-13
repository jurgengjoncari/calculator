if (["localhost", "127.0.0.1"].includes(location.hostname)) {
  import("@jurgengjoncari/default-styles/appearance-settings");
}

import Calculator from './calculator.js'

const calculator = new Calculator
const output = document.querySelector('[data-output-value]')

function flickerOutput() {
    output.classList.remove('is-flickering')
    void output.offsetWidth
    output.classList.add('is-flickering')
}

const digitButtons = document.querySelectorAll('[data-digit]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const decimalButton = document.querySelector('[data-decimal]')

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendDigit(button.textContent)
        calculator.updateDisplay()
        flickerOutput()
    })
})

decimalButton.addEventListener('click', () => {
    calculator.appendDecimal()
    calculator.updateDisplay()
    flickerOutput()
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.setOperator(button.dataset.operator)
        flickerOutput()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
    flickerOutput()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
    flickerOutput()
})

document.addEventListener('keydown', function (event) {
    let handled = false

    if (event.key.match(/^[0-9]+$/)) {
        calculator.appendDigit(event.key)
        calculator.updateDisplay()
        handled = true
    }
    if (event.key.match(/[+\-*\/]/)) {
        calculator.setOperator(event.key)
        handled = true
    }
    if (event.key == '.') {
        calculator.appendDecimal()
        calculator.updateDisplay()
        handled = true
    }
    if (event.key == '=' || event.key == 'Enter') {
        calculator.compute()
        calculator.updateDisplay()
        handled = true
    }
    if (event.key == 'Backspace') {
        calculator.delete()
        calculator.updateDisplay()
        handled = true
    }
    if (handled) {
        flickerOutput()
    }
})
