function flatten(arr) {
    // your code here    
    return arr.reduce((acc, cur)=>{
        return acc.concat(cur)
    }, [])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];