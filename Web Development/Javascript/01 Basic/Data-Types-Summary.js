/*

JavaScript is both weakly and dynamically types.

Types of Data types :
    1. Primitive 
    2. Non Primitive


1. Primitive (call by value)
    a. String
    b. Number
    c. Boolean
    d. Null
    e. Undefined
    f. Symbol
    g. BigInt

2. Non-Primitive/ Reference (call by refernece)
    a. Array
    b. Objects
    c. Functions
*/

// Primitive 
const score = 33
const scoreVAlue = 33.443

const isLoggedIn = false
const outsideTemp = null
let userEmail; // or 
// let userEmail = undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 9841694256015736n

// Non Primitive
const heros = ["Shaktiman", "Naagraj", "Doga"]

let muObj = {
    name: "Raso",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

// For more refer to : https://262.ecma-international.org/5.1/#sec-11.4.3