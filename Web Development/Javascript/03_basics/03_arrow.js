const user = {
    username: "raso",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);    // this refer to current contest
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  
// in node environment this refer to empty object
// in Window the global objects is Window Object

// function one() {
//     let username = "raso"
//     console.log(this.username);  // undefined
// }

// const one = function () {
//     let username = "raso"
//     console.log(this.username);    // undefined
//     console.log(this);             // <ref *> Object [global] {.....}
// }

// Arrow function
const one = () => {
    let username = "raso" 
    console.log(this.username);    // undefined
    console.log(this);             // {}
} 

// one()

// Basic arrow function
// const addTwo = (num1, num2) => {  
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)    // no need of return keyword 

// objects return
const addTwo = (num1, num2) => {username: "raso"}        // undefined
// const addTwo = (num1, num2) => ({username: "raso"})   // { username: 'raso }

console.log(addTwo(3, 5));

// const myArray = [2, 4, 5, 6, 7]

// myArray.forEach ()
