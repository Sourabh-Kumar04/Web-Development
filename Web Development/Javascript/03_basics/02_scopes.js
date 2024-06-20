// var c = 300
let a = 300   // global scope
if (true) {
    let a = 10    // block/local scope
    const b = 20   // local/block scope
    // var c = 30
    // c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// **scope is different in browser and node**

// neseted scope
function one () {
    const username = "raso"

    function two () {
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);  //error

    two()
}

// one()

if (true) {
    const username = "raso"
    if (username === "raso") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error 
}
// console.log(username);   // error


// +++++++++++++++++++++++++ interesting +++++++++++++++++++

addOne(5)  // can run before intialisation
function addOne (num) {
    return num + 1
}
// addOne(5)

// addTwo(5)  // Error: cannot run before initialisation
const addTwo = function(num) {    // this is func. but sometimes it is called expression
    return num + 2
}
addTwo(5)

