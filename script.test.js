/**
 * @jest-environment jsdom
 */

const { test, expect } = require('@jest/globals')
const operate = require('./script')

test('Add two positive numbers', () => {
    expect(operate(3, '+', 2)).toBe(5)
})

test('Add a negative number to a positive number', () => {
    expect(operate(-12, '+', 5)).toBe(-7)
})

test('Wrong operator', () => {})

test('Pres equal after entering only the first argument', () => {
    // expect(operate(2)).toEqual(2)
})

test('Pres equal without entering anything', () => {
    // expect(operate()).toEqual(0)
})

test('Press operator without first argument', () => {
    // expect(operate())
})

test('Divide without arguments', () => {
    expect(operate('/')).toBeNaN
})

test('Divide without arguments', () => {
    expect(operate('/')).toBeNaN
})

test('Do two consecutive calculations', () => {
    expect(operate(operate(2, '+', 9), '+', 6)).toEqual(17)
})

// Manual tests
// - I type immediately the operator
//      - The first operator is supposed to be 0
// - I type the operator more than once
//      - The last operator is replaced
// - I type equal without typing numbers or operator
//      - It doesn't have any effect on the result. 
// - I type the "clear" key, 
//      - the display becomes "0"
//      - the numbers 