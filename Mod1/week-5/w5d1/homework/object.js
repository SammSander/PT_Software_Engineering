
//Hamster

class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');
    }
};

//Person

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
            return this.name;
    }
    getAge() {
            return this.age;
    }
    getWeight() {
            return this.weight;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}. Nice to Meet you!`);
    }
   eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood-=1;
        this.bankAccount+=10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood+=10;
        this.bankAccount - Hamster.getPrice()
        return this.bankAccount
    }
}


//Story with Person Class

//1
const Timmy = new Person ('Timmy',);
console.log(Timmy);

//2
for(let i = 1; i <= 5; i++) {
    Timmy.ageUp();
}
console.log(Timmy);

//3
for(let i = 1; i <= 5; i++) {
    Timmy.eat();
}
console.log(Timmy);

//4
for(let i = 1; i <= 5; i++) {
    Timmy.exercise();
}
console.log(Timmy);

//5
for(let i = 1; i <= 9; i++) {
    Timmy.ageUp();
}
console.log(Timmy);

//6 
const Gus = new Hamster('Timmy','Gus');
console.log(Gus);

//8
Timmy.buyHamster(Gus);
console.log(Timmy);

//9
for(let i = 1; i <= 15; i++) {
    Timmy.ageUp();
}
//10
for(let i = 1; i <= 2; i++) {
    Timmy.eat();
}

//11
for (let i = 1; i<= 2; i++) {
    Timmy.exercise();
}

