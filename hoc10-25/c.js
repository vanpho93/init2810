class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static show() {
        console.log(this);
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
const teo = new Person('Teo', 10);
// const per = { name: 'abcd', age: 100 };
// per.say = ti.sayHello.bind(ti);
// //ti.sayHello();
// per.say();

// ti.height = 30;
Person.prototype.height = 30;
console.log(ti.height);
console.log(teo.height);
