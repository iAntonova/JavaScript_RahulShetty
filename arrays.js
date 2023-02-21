/* Arrays and its methods with detailed examples */
//with let not allowed, only with var
var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

// shortcut to declear array
var marks = [20, 40, 35, 12, 37, 100]
console.log(marks)
//pass index receive key
// to exess
console.log(marks[3]) //12
marks[3] = 14
console.log(marks) //[20, 40, 35, 14, 37, 100]
//to know the length of array
console.log(marks.length) //6
//add one more element to array
marks.push(65)
console.log(marks) //[20, 40, 35, 14, 37, 100, 65]
//remove last element from array
marks.pop()
console.log(marks) //[20, 40, 35, 14, 37, 100]
//add one element to the begining of array
marks.unshift(12)
console.log(marks) //[12, 20, 40, 35, 14, 37, 100]

//pass key receive index
console.log(marks.indexOf(100))

//to check is the element present in array or not
console.log(marks.includes(120))

//break array for subarrays
subMarks = marks.slice(2, 5)
console.log(subMarks)

//print step by step
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

//sumup all elements of array
var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
    console.log(sum)
}

//reduce filter map
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)

//create new array
var scores = [12, 13, 14, 16]
//create a new array with even numbers of scores array [12, 14, 16]
// this is one way if doing
var evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] %2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

console.log("**********")
// another way - simple
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map array function 
/* create a new array with even numbers of scores 
and multiply each value with array [12, 14, 16] */
