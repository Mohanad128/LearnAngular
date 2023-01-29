"use strict";
class Greeting {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    sayHello() {
        console.log(`${this.name} ${this.message}`);
    }
}
console.log(new Greeting('john', 'welcome').sayHello());
class Hi {
    constructor(asm, rsala) {
        this.asm = asm;
        this.rsala = rsala;
    }
    sayHi() {
        console.log(`Hello ${this.asm} , ${this.rsala} `);
    }
}
console.log(new Hi('Someone', 'Go to Hell').sayHi());
