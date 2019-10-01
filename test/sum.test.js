const sum = require('../src/sum')

test('Turn an array of numbers into a total of all the numbers', () => {
    expect(sum([1, 2, 3])).toBe(6);
});

test('throws error with invalid input', ()=>{
    expect(()=> sum("1")).toThrow();
    expect(()=> sum().toThrow());

})