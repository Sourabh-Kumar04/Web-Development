// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "Raso"

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber)

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
console.log(booleanIsLoggedIn);
    
/*
    1 => true ; 0 => false
    "" => false
    "Raso" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
