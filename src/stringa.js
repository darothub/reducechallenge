function stringConcat(arr) {
    // your code here
    return arr.reduce((acc, cur)=>{
        return acc + cur
    },"") 
}

console.log(stringConcat([1, 2, 3]));

module.exports = stringConcat;