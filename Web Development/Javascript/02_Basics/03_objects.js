// Objects are declared by follwoing two ways:
//      1. literals
//      2. constructor

// singleton (always created by constructor method & never created by literals declartion)
// Object.create  // created by contructor declartion

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

// Objects Literals
const JsUser = {
    name: "Raso",
    "full name": "Raso Kumar",
    mySym : "key1",
    [mySym1]: "key2",
    age: 20,
    location:"New Delhi",
    email: "raso@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// Accessing objects 
console.log(JsUser.email);   
console.log(JsUser["email"]);   // special case of accessing symbols etc

// console.log(JsUser.full name);  // we can't acces 'full name' using  dot operation
console.log(JsUser["full name"]);    // only acces using square notation
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);   // data type is string not symbol

console.log(JsUser[mySym1]);
console.log(typeof JsUser[mySym1]);   // ERROR: string but i want to use this as a symbol but this is symbol error is in typeof 

JsUser.email = "raso@yahoo.com"    // change the email of JsUser
// Object.freeze(JsUser)           // no change will be propagated after the freeze
JsUser.email = "raso@openai.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);   // string interpulation
}

console.log(JsUser.greeting());   // this give "what is inside the function here this is Hello JS user"
console.log(JsUser.greeting);     // this give function return back

console.log(JsUser.greetingTwo());   
console.log(JsUser.greetingTwo);   