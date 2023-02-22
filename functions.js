// block of code
//var - global level/functional + can be reinitialized

var greet = "Evening" //Evening

if (1 == 1) {
    var greet = "Afternoon" //Afternoon
}

function add(a, b) {
    var greet = "Morning"
    return a + b
}

let sum = add(2, 3)
console.log(sum) //5
console.log(greet)

//let - global level/block level {} + can be reinitialized
//const - can't be reinitialized

let greet1 = "Evening1" //Evening
greet1 = "Night" //Night

if (1 == 1) {
    let greet1 = "Afternoon1"
}

function add(a, b) {
    var greet1 = "Morning1"
    return a + b
}

let sum1 = add(2, 3)
console.log(sum1) //5
console.log(greet1)

//const - can't be reinitialized
console.log("**********")
const greet2 = "Evening2" //Evening2
//greet2 = "Night2" //error

if (1 == 1) {
    let greet2 = "Afternoon2"
}

function add(a, b) {
    var greet2 = "Morning2"
    return a + b
}

let sum2 = add(2, 3)
console.log(sum2) //5
console.log(greet2)

//do not have name => Anonymous function-- Function expressions

let sumOfIntegers = function (c, d) {
    return c + d
}

let sumOfNumbers = (e, f) => e + f
console.log(sumOfNumbers(2, 3)) //5
