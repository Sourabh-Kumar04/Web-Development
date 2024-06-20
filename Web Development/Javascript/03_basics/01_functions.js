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
// console.log(loginUserMessage());    // undefined just logged in

// function calculateCartPrice(num1) {    
// function calculateCartPrice(...num1) {    // rest operator ...num1
function calculateCartPrice(val1, val2, ...num1) {    // val1 and val2 contains first and second and rest value is in array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600));
const user = {
    username: "raso",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 400, 600, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 300]));