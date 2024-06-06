const name= "Saurabh"
const projectCount= 50

// console.log(name+projectCount);

// console.log(`Hello my name is ${name} and my project count is ${projectCount}`);
// this approch is also called string interpolation
// This is the mordern approch to write or concatinate Strings using backtick

const gameName= new String('SK-Pandey')
console.log(gameName[0]);
console.log(gameName.__proto__); //this returns a prototype or object of string
console.log(gameName.toUpperCase());

const newString=gameName.slice(1,-4)
console.log(newString);

const url="https://saurabh.com/saurabh%20pandey"
console.log(url.replace('%20','-'));