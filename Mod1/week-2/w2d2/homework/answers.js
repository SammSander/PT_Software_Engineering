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
/*
for (let i = 1; i <=100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('Fizz Buzz');
}else if (i % 5 === 0) {
      console.log('Buss');
} else if ( (i % 3 === 0) {
       console.log ('Fizz') }
}
*/


// part 2 Wild Wild Life
/*
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
 
plantee [2] = 5001
wolfy [3] = "Gotham City"
dart.splice ('Hawkins');
wolfy.splice (0, 1, 'Gameboy')
*/

//part 2 Methods, Revisited
/*
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 
'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
'Black Panther', 'Harry Potter', 'Imitation of Life',
 'Snatch', 'Fast and Furious']; 

console.log (favMovies [8]);
 favMovies.sort();
 favMovies.pop();
 favMovies.push("Guardians of the Galaxy");
 favMovies.shift();
 favMovies.unshift();
 favMovies.splice (3, 0, 'Avatar');
 favMovies.slice();
 */


 //part 2 Wher is Waldo 
/*
 const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice (2)
whereIsWaldo.splice (5, 1, 'No One')
console.log ([9])
*/

// part 2 find the median 

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(Math.floor(nums.length /2));
