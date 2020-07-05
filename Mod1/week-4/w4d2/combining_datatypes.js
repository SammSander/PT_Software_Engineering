//Combining Datatypes

//1
const crayonBox = {
    colors: ['yellow' , 'green', 'purple', 'another yellow']
}
console.log(crayonBox.colors[0]);

//2 
const bottle = {
    cap: {
        material: 'metal',
        colour: 'white'
    }
}
console.log(bottle.cap.material);

//3
const receipt = [
    {name: 'tofu', price: 3.50},
    {name: 'chippies', price: 2.50},
    {name: 'pepper', price: 1.50}
]
console.log(receipt[0].price);

//4
const apartmentBuilding = [
    tenants = ['Karen', 'Jack Jackerson', 'MR.', 'Jarvis']
]
console.log(apartmentBuilding[0][0])


//More Than One Level Deep

//1
/*function kint(item, size, color, yarn) {
    this.item = item;
    this.size = size;
    this.color = color;
    this.yarn = yarn;
}
const knitting = new knit('scarf', '6 ft', 'yellow', 'thick');
console.log(knitting.item);
*/

//2
function crayonSelector(color, broken, paper) {
    this.color = ['yellow' , 'green', 'purple', 'another yellow'];
    this.broken = broken
    this.paper = paper
}
const Crayon = new crayonSelector('another yallow', true, 'perfect');
console.log(Crayon.color[0])


//Model a Vending Machine

const vendingMachine = [
    {name: 'Chippies', price: 1.00},
    {name: 'Bottle Soda', price: 2.00},
    {name: 'Honey Bun', price: 0.50},
]
vendingMachine.vend = () => {
    for (i = 0; i < vendingMachine.length; i++) {
        snackName = vendingMachine[i].name
    };
    console.log('Sick!  ' + snackName ) }
    vendingMachine.vend(0)

    // Call Backs

    //1
    const add = (a, b) => {
        return (a + b)
    }
    add(5, 2)

    //2
    //2
const subtract = (a, b) => {
    return (a - b)
}
subtract(1, 1)

//3
const multiply = (a, b) => {
    return (a * b)
}
multiply(5, 10)

//4
const divide = (a, b) => {
    return (a / b)
}
divide(10, 5)

//5//6//7
let mathArray = [];
mathArray.push(add, subtract, multiply, divide)
console.log(mathArray)

function operate(num1, num2) {
    for (method of mathArray) {
        return method(num1, num2)
    }
}
const calculate = (num1, num2, x) => {
    x = mathArray[x](num1, num2) ;
    console.log(x)
}

calculate(1, 1) 
calculate(1, 1) 
calculate(2, 2) 
calculate(10, 5)



// clean up
