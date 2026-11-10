export default class Calculator {
    constructor() {
        this.operator = undefined
        this.currentOperand = '0'
        this.previousOperand = ''
        this.hasResult = false
        this.output = document.querySelector('[data-output-value]')
    }

    delete() {
        if (!Number.isFinite(Number(this.currentOperand)) || this.currentOperand.length <= 1) {
            this.operator = undefined
            this.currentOperand = '0'
            this.previousOperand = ''
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1)
        }
        this.hasResult = false
    }

    appendDigit(digit) {
        if (this.hasResult) {
            this.currentOperand = digit
            this.previousOperand = ''
            this.hasResult = false
            return
        }

        if (this.currentOperand === '0' || !Number.isFinite(Number(this.currentOperand))) {
            this.currentOperand = digit
        } else {
            this.currentOperand += digit
        }
    }

    appendDecimal() {
        if (this.hasResult) {
            this.currentOperand = '0.'
            this.previousOperand = ''
            this.hasResult = false
            return
        }

        if (this.currentOperand === '' || !Number.isFinite(Number(this.currentOperand))) {
            this.currentOperand = '0.'
            return
        }

        if (!this.currentOperand.includes('.')) {
            this.currentOperand += '.'
        }
    }

    setOperator(operator) {
        if (this.operator !== undefined) {
            if (this.currentOperand !== '') {
                this.compute()
                this.updateDisplay()
            } else {
                this.operator = operator
                return
            }
        }

        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
        this.hasResult = false
    }

    compute() {
        if (this.operator === undefined || this.previousOperand === '' || this.currentOperand === '') {
            return
        }

        const x = Number(this.previousOperand)
        const y = Number(this.currentOperand)
        if (Number.isNaN(x) || Number.isNaN(y)) {
            return
        }

        let result
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
            default:
                return
        }

        this.previousOperand = ''
        this.currentOperand = String(result)
        this.operator = undefined
        this.hasResult = true
    }

    updateDisplay() {
        if (this.currentOperand.length >= 16) {
            this.output.textContent = Number(this.currentOperand).toExponential()
        } else {
            this.output.textContent = this.currentOperand
        }
    }
}
