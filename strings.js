let day = 'tuesday '
console.log(day.length) //8

/* to get substring */
let subDay = day.slice(0, 4)
console.log(subDay) //tues

/* to get access to any char of the string */
console.log(day[1]) //u
/* to split the string */
// 'tue' <-> 'day '
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1]) //'day '

/* to reduce space from 'day ' */
console.log(splitDay[1].trim().length)

/* FALSE?: u can't substruct strings */
let date = '23'
let nextDate = '27'
let diff = nextDate - date
console.log(diff) //4

let diff2 = parseInt(nextDate) - parseInt(date)
console.log(diff2) //4

/* convert back to string */
console.log(diff.toString()) //'4'

/* concatinate 2 strings */
let newQuote = day + "is Funday day"
console.log(newQuote)

/* we want to know where exactly char present */
let val = newQuote.indexOf("day")
console.log(val) //4
/* we want to know where second time "tuesday is Funday" */
let val2 = newQuote.indexOf("day", 5)
console.log(val2) //14

console.log("**********")
/* count how many times "day" in sentence */
let count = 0
let value = newQuote.indexOf("day")
while (value !== -1) {
    count++
    value = newQuote.indexOf("day", value + 1)
}
console.log(count)