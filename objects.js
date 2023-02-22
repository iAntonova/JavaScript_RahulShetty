//object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Joe'
}

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