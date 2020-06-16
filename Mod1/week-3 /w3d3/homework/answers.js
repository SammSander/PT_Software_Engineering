//1: booleans
//2: string
//3: object
//4: array
//5: object and array
//6: object and array

// take it easy 
//1
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
//2
console.log(rainbow[4]);
//3
const sam = {
    food: "rice noodles",
    hobby: "movies",
    city: "Columbus",
    datatype: "array"
}
//4
console.log(sam.hobby);

// crazy objects

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  //1 
  console.log(crazyObject.taco[2]);
  //2
  //console.log(crazyObject.quotes[0]);
  //3
  //4//5//6
  // not sure how to get in an array in an object in an array in an object 
  