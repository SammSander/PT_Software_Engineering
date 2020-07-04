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
function kint(item, size, color, yarn) {
    this.item = item;
    this.size = size;
    this.color = color;
    this.yarn = yarn;
}
const knitting = new knit('scarf', '6 ft', 'yellow', 'thick');
console.log(knitting.item);

//2
function crayonSelector(color, borken, paper) {
    this.color = ['yellow' , 'green', 'purple', 'another yellow'];
    this.broken = broken
    this.paper = paper
}
const Crayon = new crayonSelector('another yallow', true, 'perfect');
console.log(Crayon.color[0])


