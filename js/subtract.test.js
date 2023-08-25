const subtract = require('./subtract')

test('subtract two values', () => {
    expect(subtract(1,2)).toBe(-1)
})