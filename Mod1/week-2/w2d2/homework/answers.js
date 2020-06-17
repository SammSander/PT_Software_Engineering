//part 2 // easy going

/*
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//part 2 //get even

for (let i = 0; i < 201; i+= 2) {
    console.log(i);
}
*/

// part 2 // fizz buzz

/* o- 100
i is % by 3 = fizz
i is % by 5 = buzz
i is % by 3 AND 5 = fizz buzz */

for (let i = 1; i <=100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('Fizz Buzz');
}else if (i % 5 === 0) {
      console.log('Buss');
} else if ( (i % 3 === 0) {
       console.log ('Fizz') }
}



// part 2 Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
//1
plantee [2] = 5001
console.log(plantee);
//2
wolfy [3] = "Gotham City"
console.log(wolfy);
//3
dart.push('Hawkins');
console.log(dart);

//4
wolfy.splice (0, 1, 'Gameboy')
console.log(wolfy);


// yell at ninja turtles 

//1
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
//2
for (const turtlePower of turtles) {
    console.log(turtlePower.toUpperCase());
}



// Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 
'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
'Black Panther', 'Harry Potter', 'Imitation of Life',
 'Snatch', 'Fast and Furious']; 

console.log (favMovies [8]);
//1
favMovies.sort();
//2
favMovies.pop();
//3
favMovies.push('Guardians of the Galaxy'); 
//4
favMovies.reverse();
//5
//6
favMovies.unshift('The Big Lebowski');
//7
favMovies.splice(15, 1, 'Avatar'); //perm changes array
//8
//9
const secondHalf = favMovies.slice(10, 20);
console.log(secondHalf);
//10
console.log(favMovies)



 //part 2 Where is Waldo 
/*
 const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice([0])

console.log(Waldo);
*/

// excited kitten
//1
for (d = 0; d < 20; d++) {
    console.log('Love me, pet me! HSSSSSS!')
}

//2



// find the median 

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(Math.floor(nums.length /2));
