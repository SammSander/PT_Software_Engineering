/*
const adventurer = {
    name: "Timothy",
    hitpoint: 10,
    weapons: ['sword', 'potion', 'Tums']
  }
  console.log(adventurer.name); // Timothy
  console.log(adventurer.weapons); // ['sword', 'potion', 'Tums']
  console.log(adventurer.weapons[2]); // Tums
  // Not really useful to our lecture. Just for refreshing our minds on how to access array indexes :)
  // const arr  = [1, 2, 3, 4];
  // console.log(arr);
  // console.log(arr[3]);
  */


  
/*
 * How do we loop over an array inside of an object???
 * Well first we access our array
 * in our case it's inside of the adventurer.weapons property
 * so adventurer.weapons is our array
 *
 * How do we loop over an array?
 * Note: Just because an array is inside of the object doesn't make it behave any differently
 *  Steps to loop over array:
 *    1) start from index 0
 *        for(let i = 0)
 *    2) add your conditional
 *        for(let i = 0; i < array.length)
 *    3) increment
 *        for(let i = 0; i < array.length; i++) {
 *        }
 *    4) Decide what to do with your value
 *        for(let i = 0; i < array.length; i++) {
 *          console.log(array[i]); // this should output the element inside of the variable called array
 *        }
 *
 * So all the steps are basically just the same. The only steps that change are 3 and 4
 * And not by much
 *
 * array = adventurer.weapons
*/ /*
const adventurer = {
  name: "Timothy",
  hitpoint: 10,
  weapons: ['sword', 'potion', 'Tums']
}
for(let i = 0; i < adventurer.weapons.length; i++) {
  console.log(adventurer.weapons[i]);
}
*/

// activity 
/*
const adventurer = {
 name: "Timothy",
  hitpoint: 10,
  weapons: ['sword', 'potion', 'Tums']
  companion: {
    name: 'Velma',
    type: 'Bat'
  }

  
  adventurer.companion.name = "susan"

  console.log(adventure.companion.name)

  adventuter.companion2 = {
    name: 'Campanion 2',
    type: 'insect'
  }

console.log(adventurer);

console.log(adventurer.companion2.type);
*/
/*
const monster = {
  name: 'Slimer',
  age: 6
}

console.log(monster[name]);

const str = "name";
console.log(monster[str]);


const movie = {
  title: 'L',
  director: 'Me',
  year: 1960
}
for (key in movie) {
  console.log(movie [key])
}
*/

// activity 

const movie = {
  title: 'Eraserhead',
  director: 'Davie Lynch',
  year: 1978
}
for (key in movie) {
  console.log(movie[key]);
}
