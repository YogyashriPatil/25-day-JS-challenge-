
let firstName="Yogyashir";        
let greeting='Hello world!';    

let age=30;                   //number.
let temperature=98.6;         //floating-point number.
let largeNumber=10000000000n; // BigInt 

let isActive=true;            //true
let isFinished=(5 > 10);      //false 
let carModel;         
let currentSelection = null;  
const uniqueId = Symbol('id');  

const userProfile = {       
    name: firstName,
    isStudent: isActive,
    score: 95
};

// Array: A list-like object
const colors = ["Red", "Green", "Blue"]; // Indexed list of items.
const mixedArray = [1, "two", true, null]; // Arrays can hold different types.

// Function: A reusable block of code
function multiply(a, b) {
    return a * b;
}

// Logging all types to the console for inspection
console.log("Primitive Types");
console.log("String:", typeof firstName, firstName);
console.log("Number:", typeof age, age);
console.log("Boolean:", typeof isActive, isActive);
console.log("Undefined:", typeof carModel, carModel);
console.log("Null (Note: logs 'object'):", typeof currentSelection, currentSelection);
console.log("BigInt:", typeof largeNumber, largeNumber);
console.log("Symbol:", typeof uniqueId, uniqueId);

console.log("Object Types");
console.log("Object:", typeof userProfile, userProfile);
console.log("Array (Note: logs 'object'):", typeof colors, colors);
console.log("Function:", typeof multiply, multiply);
