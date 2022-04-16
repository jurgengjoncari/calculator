class Calculator {
    constructor() {
        this.operator = undefined
        this.currentOperand = '0'
        this.previewsOperand = ''
        this.output = document.querySelector('[data-output]')
    }

    delete() {
        if (isNaN(this.currentOperand) || this.currentOperand.length == 1 || this.currentOperand == Infinity) {
            this.operator = undefined
            this.currentOperand = '0'
            this.previewsOperand = ''
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1)
        }
    }

    appendDigit(digit) {
        if (this.currentOperand == '0' || isNaN(this.currentOperand) || this.currentOperand == Infinity) {
            this.currentOperand = digit
        } else {
            this.currentOperand = String(this.currentOperand).concat(digit)
        }
    }

    appendDecimal() {
        if (this.currentOperand % 1 == 0) {
            this.currentOperand = String(this.currentOperand).concat('.')
        }
        if (this.currentOperand == '') {
            this.currentOperand = '0.'
        }
    }
    
    setOperator(operator) {
        if (this.operator != undefined && this.currentOperand != '') {
            this.compute(operator)
            this.updateDisplay()
        }
        this.operator = operator
        this.previewsOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        let result
        const x = parseFloat(this.previewsOperand)
        const y = parseFloat(this.currentOperand)
        switch (this.operator) {
            case '+':
                result = x + y
                break
            case '-':
                result = x - y
                break
            case '*':
                result = x * y
                break
            case '/':
                result = x / y
                break
        }
        this.previewsOperand = this.currentOperand
        this.currentOperand = result
        this.operator = undefined
    }
    
    updateDisplay() {
        if (this.currentOperand.length >= 16) {
            this.output.textContent = parseFloat(this.currentOperand).toExponential()
        }
        else {
            this.output.textContent = this.currentOperand
        }
    }
}

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