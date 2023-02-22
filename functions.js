// block of code

function add(a, b) {
    return a + b
}

let sum = add(2, 3)
console.log(sum) //5

//do not have name => Anonymous function-- Function expressions

let sumOfIntegers = function (c, d) {
    return c + d
}

let sumOfNumbers = (e, f) => e + f
console.log(sumOfNumbers(2,3)) //5
