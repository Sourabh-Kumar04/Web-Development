// const userEmail = "raso@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Flasy values
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy 
    // "0", "false", " ",  [], {}, function(){} 


// Array is Empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Check object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// In browser these are the comparision
//     false == "0" -> true
//     false == ' ' -> true
//     0 == ' ' -> true

// Nullish Coalescing Operator(??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// val1 = null ?? undefined     // undefined
// val1 = undefined ?? null     // null

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")















