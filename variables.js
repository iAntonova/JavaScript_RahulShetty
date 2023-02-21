//JavaScript HelloWorld Program
//console.log("Hello World")

/*
Declaring the variables in JS
Ubderstanding the Datatypes in JS
*/

// var, (let, const - ES6)  
let a = 4
//console.log(a)
//console.log(typeof(a))

let b = 4.06
// console.log(typeof(b))

//let c = "Hi there!"
//var c = "Hi there!"
const c = "Hi there!"
//console.log(typeof(c))

let required = true
//console.log(typeof(required))

// 2 more: null and undefined

// let c = a + b (it did not work)
/* 
we cannot redeclare variable with let keyword, 
but possible with var 
*/
// var c = a + b
console.log(c)

// NOT operator for bulean
//console.log(!required)

// reassign
// without rediclaring we can reassign with let
c = a + b
//var c = a + b (this is also allowed)
console.log(c)

// const keyword - cannot reassign