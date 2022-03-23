const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']

const digitButtons = document.querySelectorAll('[data-digit]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')

class Calculator {
    constructor() {
        this.operator = undefined
        this.currentOperand = ''
        this.previewsOperand = '0'
    }
    
    output = document.querySelector('[data-output]')

    clear() {
        this.operator = undefined
        this.currentOperand = ''
        this.previewsOperand = '0'
    }

    appendNumber(number) {
        console.log(this.currentOperand);
        if (this.operator == undefined) {
            if (this.previewsOperand == '0') {
                this.previewsOperand = number
            } else {
                this.previewsOperand = String(this.previewsOperand).concat(number)
            }
        } else {
            this.currentOperand = String(this.currentOperand).concat(number)
        }
    }
    
    calculate(operator) {
        if (this.currentOperand == '') {
            this.currentOperand = this.previewsOperand
        }
        if (this.operator == "+") {
            this.previewsOperand = Number(this.previewsOperand) + Number(this.currentOperand)
        } else if (this.operator == "-") {
            this.previewsOperand -= this.currentOperand
        } else if (operator == "*") {
            this.previewsOperand *= this.currentOperand
        } else if (operator == "/") {
            this.previewsOperand /= this.currentOperand
        }
        this.currentOperand = ''
        return this.previewsOperand
    }
    
    updateDisplay() {
        this.output.textContent = this.previewsOperand
    }
    
    setOperator(operator) {
        if (this.operator != undefined && operand != '') {
            this.previewsOperand = calculate(operator)
        }
        this.operator = operator
    }
    
    compute() {
        if (this.operator != undefined) {
            this.previewsOperand = calculate(this.operator)
        }
        this.operator = undefined
    }   
}

const calculator = new Calculator

const calculatorGrid = document.querySelector('#calculator')

digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.setOperator(button.textContent)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
})