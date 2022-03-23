class Calculator {
    constructor() {
        this.operator = undefined
        this.currentOperand = '0'
        this.previewsOperand = ''
        this.output = document.querySelector('[data-output]')
    }

    clear() {
        this.operator = undefined
        this.currentOperand = '0'
        this.previewsOperand = ''
        this.output.textContent = '0'
    }

    appendDigit(digit) {
        if (this.currentOperand == '0') {
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
        return this.currentOperand
    }
    
    setOperator(operator) {
        this.operator = operator
        this.previewsOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
        if (this.currentOperand == '') {
            this.currentOperand = this.previewsOperand
        }
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
        this.currentOperand = result
        return result
    }
}

const calculator = new Calculator

const digitButtons = document.querySelectorAll('[data-digit]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const decimalButton = document.querySelector('[data-decimal]')

const output = document.querySelector('[data-output]')

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendDigit(button.textContent)
        output.textContent = button.textContent
    })
})

decimalButton.addEventListener('click', () => {
    output.textContent = calculator.appendDecimal()
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (calculator.operator != undefined && calculator.currentOperand != '') {
            output.textContent = calculator.compute(button.textContent)
        }
        calculator.setOperator(button.textContent)
    })
})

equalsButton.addEventListener('click', () => {
    output.textContent = calculator.compute()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
})