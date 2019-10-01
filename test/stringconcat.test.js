const stringConcat = require('../src/stringa')

test('Turn an array of numbers into a long string of all those numbers.', () => {
    expect(stringConcat([1, 2, 3])).toBe('123');
});

