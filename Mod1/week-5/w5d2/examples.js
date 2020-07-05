class Car {
    constructor(maker, serialNumber) {
        this.serialNumber = serialNumber;
        this.maker = maker;
    }
    drive() {
        console.log("The car moves");
    }
}

const newCar = new Car('Ford, 12345');
console.log(newCar);

