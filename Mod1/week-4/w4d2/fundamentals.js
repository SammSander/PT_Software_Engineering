/*
DRY: Don't Repeat Yourself; use things like loops, functions, classes so your code is clean and not repeting itself.
KISS: Keep it Simple, Stupid; dont over complicate.
Avoid creating a YAGNI: You aren’t going to need it; dont use functions untill you need 
Do the simplest thing that could possibly work: the easiest way to do something. do that. 
Don't make me think: your code should be simple, easy to read/ understand so anyone can understand it.
Write code for the maintainer: so the person, a stranger, could read and maintaine your code easily
Single responsibility principle: class or function should do that one thing and do it well
Avoid premature optimization: don't optimize untill your code works.
Separation of concerns: different tasks need to be handled differently.
*/

const f = l => {  //declares the function
    let es = 0, p = 0, c = 1, n = 0  //variables and their values
    while (c <= l) {   // will run as long as c is less than or equal to l
      n = c + p;  // the sum of c and p is n
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0   //if c is an even number adds it to the value of es and if its not add 0 
    }
    return es
  }
  
  console.log(f(55))  // l is 55 and logs the answer



  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

  // honestly the second one makes more sense to me.