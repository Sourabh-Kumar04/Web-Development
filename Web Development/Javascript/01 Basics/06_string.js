const name = "Raso" // String
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello my Name is ${name} and repo Count is ${repoCount}`);

const gameName = new String('Raso-Kumar04')  // String 

console.log(gameName[0]);
console.log(gameName.__proto__);


// Accesing some Objects
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,4)  // substring(-12, 4 ) indexing start from 0 not from -12
console.log(newString);

const anotherString = gameName.slice(-12, 7)
console.log(anotherString);

const newString1 = "   Raso   "
console.log(newString1);
console.log(newString1.trim()); // trim remove starting and ending spaces 

const url = "https://rasozon.com/raso%20kumar04"

console.log(url.replace('%20', '-'));

console.log(url.includes('aso'));

console.log(gameName.split('-'))  // output is array



