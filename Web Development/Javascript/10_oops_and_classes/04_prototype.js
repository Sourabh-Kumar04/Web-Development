let myName = "raso    "
let myChannel = "raso_world     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spider"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.raso = function(){
    // console.log(`raso is present in all objects`);
}

Array.prototype.heyRaso = function(){
    console.log(`Raso says hello`);
}

// myHeros.raso()
// heroPower.raso()

// myHeros.heyRaso()
// heroPower.heyRaso()


// Inheritance

const User = {
    name: "raso",
    email: "raso@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "RasoAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"raso".trueLength()
"icetea".trueLength()








