// JavaScript Type Conversion and Operations Demonstration

let score="javascript"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Conversion Notes:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Conversion Notes:
// 1 => true; 0 => false
// "" => false
// "javascript" => true

let someNumber=42

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let value=5
let negValue=-value
console.log(negValue);

// Arithmetic Operations:
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "code"
let str2 = " editor"

let str3 = str1 + str2
console.log(str3);

// Complex String Concatenation:
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Operator Precedence:
console.log( (3 + 4) * 5 % 3);

// Unary Operators:
console.log(+true);
console.log(+"");

// Assignment chaining:
let num1, num2, num3

num1 = num2 = num3 = 5 * 5

let gameCounter = 99
++gameCounter;
console.log(gameCounter);
