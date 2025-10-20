//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["h", "s", "s"];
let myObj = {
    name: "Vrushali",
    age: 19,
}
console.log(myObj);
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);
