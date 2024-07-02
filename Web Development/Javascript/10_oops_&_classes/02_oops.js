const user = {
    username: "Raso",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`);
        // console.log(`Username: ${this.username}`);
        console.log(this);

    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  // {} but in browser is it not empty

// const promiseOne = new Promise()
// const date = new Date()  // new is used to create new context and this is called constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this  // it is not necessary to write "return this"
}

// const userOne = User("Raso", 12, true)
// const userTwo = User("World_of_Raso", 13, true)   // overwrite "Raso" with "World_of_Raso"

const userOne = new User("Raso", 12, true)   
const userTwo = new User("World_of_Raso", 13, true)

// when we use 'new' keyword 
//      Step 01: firstly empty object is created
//      Step 02: constructor function is called
//      Step 03: all the argument are injected in "this"
//      Step 04: we all things in function

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);


















