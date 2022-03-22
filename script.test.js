const operate = require('./script3')

let operator = undefined
let operand = ''
let result = '0'

test('type operator after an operator and operand is set should calculate the two and save the operator in memory', () => {
    expect(operate('2'))
})