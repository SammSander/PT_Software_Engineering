

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//filler
const lessThanFour = num => num < 4     
console.log(nums.filter(lessThanFour))

const evenLength = word => word.length % 2 === 0  
console.log(panagram.filter(evenLength))

// find 
const divFive = num => num % 5 === 0
console.log(nums.find(divFive))

const longerThanFive = word => word.length > 5
console.log(panagram.find(longerThanFive))

//find index
const divThree = num => num % 3 === 0
console.log(nums.findIndex(divThree))

const lessThanTwo = word => word.length < 2
console.log(panagram.findIndex(lessThanTwo))

//for each
nums.forEach(num => console.log(num * 3)) 

// map 

let newNums = []
newNums.push(nums.map(num => num * 100))
console.log(newNums)

let upper = []
upper.push(panagram.map(word => word.toUpperCase()))
console.log(upper)