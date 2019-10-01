var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    // your code here
    function compare(a, b){
        const {age: ageA} = a
        const {age: ageB} =b 
        return ageA-ageB
    }
    let sortedArr = arr.sort(compare)
    // return sortedArr
    return sortedArr.reduce((acc, cur)=>{
    
        let youngVotes = cur.age <= 18+7 && cur.voted == true
        let midVotes = !youngVotes && cur.age <= 26 + 9 && cur.voted == true
        let oldVotes = !youngVotes && !midVotes && cur.age <= 36 + 19 && cur.voted == true
        let youth = cur.age <= 18 + 7
        let mids = !youth && cur.age <= 26 + 9
        let olds = !mids && !youth && cur.age <= 36 + 19
        youngVotes ? acc.youngVotes = acc.youngVotes +1 || 1 : false;
        youth ? acc.youth = acc.youth +1 || 1 : false
        midVotes ? acc.midVotes = acc.midVotes+1 || 1 : false
        mids ? acc.mids = acc.mids+1 || 1 : false
        oldVotes ? acc.oldVotes = acc.oldVotes + 1 || 1 : false
        olds ? acc.olds = acc.olds + 1 || 1 : false
        return acc

    }, {})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/