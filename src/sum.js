function sum(arr) {
    // your code here
    if(!Array.isArray(arr)){
        throw new Error("invalid")
    }
    return arr.reduce((acc, cur)=>{
        return acc + cur
    })
}

console.log(sum([1, 2, 3]));

module.exports =  sum;