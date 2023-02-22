class Person {
    age = 25
    // location = "Canada"
    // get = property
    get location() {
        return "Canada"
    }
    /* constructor is method whitch executes by default
       when u create object of the class
       firstName, lastName - instanse variables */
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods
    fullName() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

/* create object for Class */
let person = new Person("Tim", "Joseph")
let person1 = new Person("Chris", "Jones")

/* access to object for Class */
console.log(person.age) //25
console.log(person.location) //Canada
console.log(person.fullName()) //Tim Joseph
console.log(person1.fullName()) //Chris Jones