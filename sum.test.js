const { sum, subtraction, multiply } = require('./sum');

describe('basic math', () => {
    test('adds 5 + 11 to equal 16', () => {
        const val = sum(5, 11)
        expect(val).toBe(16)
    });

    test('subtract', () => {
        const difference = subtraction(10, 6)
        expect(difference).toBe(4)
    })
})