function sayMyName () {
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("O");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

addTwoNumber(3, 6)  // 9
// addTwoNumber(3, "6")  //  36
// addTwoNumber("a", 6)  //a6

// const result = addTwoNumber(3, 6)  // 9
// console.log("Result: ", result);   //undefined

function addTwoNumber(number1, number2) { 
    // let result = number1 + number2
    // return result
    // // console.log("raso");  //this never print bcz this is after return

    return number1 + number2
}

const result = addTwoNumber(3, 6)  // 9
// console.log("Result: ", result);   // nothing will print

// function loginUserMessage(username) {
function loginUserMessage(username = "sam") {
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a username"); 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Raso"));  // Raso just logged in
console.log(loginUserMessage());    // undefined just logged in








