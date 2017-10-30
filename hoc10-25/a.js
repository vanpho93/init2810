// Array arr = [];

// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log(`Hello, I am ${this.name}, ${this.age} years old.`)
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}, ${this.age} years old.`);
    }

    get yearOfBirth() {
        return 2017 - this.age;
    }

    set yearOfBirth(value) {
        this.age = 2017 - value;
    }
}

const ti = new Person('Ti', 10);
const tun = new Person('Tun', 10);
const teo = new Person('Teo', 20);

teo.sayHello();
console.log(teo.yearOfBirth);
teo.yearOfBirth = 1993;
console.log(teo.age);
