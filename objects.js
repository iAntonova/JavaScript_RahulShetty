//object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

console.log(person.fullName()) //Tim Joe
console.log(person.lastName) //Joe
console.log(person['lastName']) //Joe

/* change the property */
person.firstName = 'Tim Dane'
console.log(person.firstName) //Tim Dane

/* add new property */
person.gender = 'male'
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }

/* delete property */
delete person.gender
console.log(person) //{ firstName: 'Tim Dane', lastName: 'Joe' }

/* check is property exist in the object */
console.log('gender' in person) //false

console.log("**********")
/* print values of all properties 
OR print all the values of the js object:
u neet to iteraite over the properties using for loop */
for (let key in person) {
    console.log(person[key]) //Tim Dane //Joe
}

