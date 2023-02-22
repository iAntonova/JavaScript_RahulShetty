/* Inheritance is the Main Pillar in Object oriented Programming
one class can inherit/acquire the properties,Methods of another class
The class which inherits the properties of other is known 
    as subclass (derived class, cheld class)
The class whose properties are inherited is known 
    as superclass (or Parentclass) */
const Person = require('./classesPropertiesMethods')
class Pet extends Person {
    get location() {
        return "BlueCross"
    }
    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)