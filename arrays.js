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
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

// another way - simple
let newFilterEvenScores = scores.filter(score => score % 2 == 0)
console.log(newFilterEvenScores) //[12, 14, 16]

//map array function 
/* create a new array with even numbers of scores 
and multiply each value with 3: [12, 14, 16] => [36,52,48] */
let mappedArray = newFilterEvenScores.map(score => score * 3)
console.log(mappedArray) //[ 36, 42, 48 ]

//reduce
/* create a new array with even numbers of scores 
and multiply each value with 3 and 
sum them: [12, 14, 16] => [36,52,48] => 126 */
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0)
console.log(totalVal) //126

//create new array
var scores1 = [12, 13, 14, 16]
let sumValue = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0)
console.log(sumValue)

//sorting in array 
/* 1st type w/strings
   2nd type /numbers */
console.log("**********")
let fruits = ["banana", "mango", "pomegrante", "apple"]
console.log(fruits.sort()) //[ 'apple', 'banana', 'mango', 'pomegrante' ]
console.log(fruits.reverse()) //[ 'pomegrante', 'mango', 'banana', 'apple' ]

var scores2 = [12, 13, 003, 19, 14, 16]
console.log(scores2.sort()) //[ 12, 13, 14, 16, 19, 3 ]
/* this one 
scores2.sort(function (a, b) {
    return a - b
})
same but short */
console.log(scores2.sort((a, b)=> a - b)) //[ 3, 12, 13, 14, 16, 19 ]
console.log(scores2.sort((a, b)=> b - a)) //[ 19, 16, 14, 13, 12, 3 ]