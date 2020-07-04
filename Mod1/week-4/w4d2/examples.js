const iceCreams = ['Vinilla', 'Chocolate', 'Strawberry'];


const updatedIceCreams =iceCreams.map(flavor => {
    return flavor + 'hello'
});
console.log(updatedIceCreams);


const orgArray = [2,4,6,8,10];

const newArray = orgArray.map(elem => {
   return elem * 2;
});
console.log(newArray);


const classArray = ['Javascript', 'HTML', 'CSS', 'Data Analyist', 'Marketing', "Database Design", 'Visual Desgin'];
const numberArray = [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

const newnumberArray = numberArray.reduce (
    (accumulator, current) => {
    return accumulator + current;
}, 3)
console.log(newnumberArray);