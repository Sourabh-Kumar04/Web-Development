const score = 400
// console.log(score);

// explicity define the data type
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.870358
// console.log(otherNumber.toPrecision(3));  // 23.9

const otherNumber2 = 12344.460
// console.log(otherNumber2.toPrecision(3)) // 1.23e+4

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // Indian
// console.log(hundreds.toLocaleString());  // USA



// ******************** Maths *************************
// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // 5 
// console.log(Math.floor(4.7)); // 4
// console.log(Math.min(4, 5, 98, 2, 7));
// console.log(Math.min(4, 5, 98, 2, 7));

console.log(Math.random());  // values between 0 and 1
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

// generalise formula 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

