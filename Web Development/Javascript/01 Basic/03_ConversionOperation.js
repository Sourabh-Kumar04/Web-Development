// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Raso"

// console.log(typeof score);
// console.log(typeof(score));

let valueNumber = Number(score)
// console.log(typeof valueNumber);
// console.log(valueNumber)

/*
    "33" => 33
    "33abc" => NaN (not a number but type is a number)
    null => 0
    undefined => NaN
    true => 1, false => 0
*/

// let isLoggedIn = 1 
// let isLoggedIn = "" 
let isLoggedIn = "Raso" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
    
/*
    1 => true ; 0 => false
    "" => false
    "Raso" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********** Operations *************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hello"
let str2 = " Raso"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");  // for referto : https://tc39.es/ecma262/#sec-abstract-operations

// console.log( ((3 + 4) * 5) % 4);

// console.log(true) //true
// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);