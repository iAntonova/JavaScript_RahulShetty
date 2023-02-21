/*
Loops and Conditions in JS
*/
//declear boolean const variable
const flag = true
// if condition
if (!flag) {
    //    console.log("Condition satisfied")
}
else {
    //    console.log(flag)
    //    console.log("Condition not satisfied")
}

// while loop
let i = 0
while (i > 10) { // do not work
    i++
    console.log(i)
}

// do loop
do {
    i++
} while (i > 10); //works at least 1 time
//console.log(i)

// for loop
for (let k = 0; k <= 10; k++) {
    //console.log(k)
}

// while loop2
let required = true
while (required) { // do not work
    //console.log(required)
    required = false
}

// for loop2
// from 1 to 10 give me common multiple values of 2 and 5
// and == &&
// or == ||
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        //console.log(k) 
    }
}

// for loop3
// from 1 to 10 give me common multiple values of 2 and 5
// print only first three digits
let n = 0
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k)
        if (n == 3)
            break
    }
}