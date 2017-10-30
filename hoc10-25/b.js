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

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }

    sayHello() {
        super.sayHello();
        console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
    }

    play() {
        console.log(`${this.name} is playing ${this.toy}.`);
    }
}

const teo = new Child('Teo', 10, 'Auto');
teo.sayHello();
teo.play();
console.log(teo.yearOfBirth)