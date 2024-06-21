// if

// conditional operator: <, >, <=, >=, ==, !=, ===

// const isUserLoggedIn = true

// if (isUserLoggedIn){
//     console.log("User is Logged In");
// }

// const temperature = 41

// if (temperature === 40){
//     console.log("Temperature is 40");
// } else {
//     console.log("Temperature is not equal to 40");
// }

// console.log("Executed");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     let power = "fly"
//     // var power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);   // power is not defined bcz const & let is within scope
// console.log(`User power: ${power}`);   // power is defined bcz var is not scope dependent

// const balance = 1000

// if (balance > 500) console.log("tets");
// if (balance > 500) console.log("tets"),    // it is not a good practice & not recommended
//     console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitcard ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail {
    console.log("User logged in");
})










