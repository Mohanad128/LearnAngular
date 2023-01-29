class Greeting{
    name:string;
    message:string;
    constructor(name:string,message:string){
        this.name=name;
        this.message=message;
    }
    sayHello(){
        console.log(`${this.name} ${this.message}`);
    }
}

console.log(new Greeting('john','welcome').sayHello());



class Hi{
    asm:string;
    rsala:string;
    constructor(asm:string,rsala:string)
    {
        this.asm=asm;
        this.rsala=rsala;
    }
    sayHi(){
        console.log(`Hello ${this.asm} , ${this.rsala} `);
    }
}

console.log(new Hi('Someone','Go to Hell').sayHi());