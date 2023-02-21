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