const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']

class Calculator {
    constructor() {
        this.operator = undefined
        this.operand = ''
        this.result = '0'
    }

    clear() {
        this.operator = undefined
        this.operand = ''
        this.result = '0'
    }

    appendNumber(number) {
        if (this.operator == undefined) {
            if (this.result == '0') {
                this.result = number
            } else {
                this.result = String(this.result).concat(number)
            }
        } else {
            this.operand = String(this.operand).concat(number)
        }
    }
    
    calculate(operator) {
        if (this.operand == '') {
            this.operand = this.result
        }
        if (this.operator == "+") {
            this.result = Number(this.result) + Number(this.operand)
        } else if (this.operator == "-") {
            this.result -= this.operand
        } else if (operator == "*") {
            this.result *= this.operand
        } else if (operator == "/") {
            this.result /= this.operand
        }
        this.operand = ''
        return this.result
    }
    
    updateDisplay() {

    }
    
    chooseOperator(operator) {
        if (this.operator != undefined && operand != '') {
            this.result = calculate(operator)
        }
        operator = input
    }
    
    compute() {
        if (operator != undefined) {
            result = calculate(operator)
        }
        operator = undefined
    }   
}

const calculator = new Calculator

const calculatorGrid = document.querySelector('#calculator')

const digitButtons = document.querySelectorAll('[data-digit]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')


