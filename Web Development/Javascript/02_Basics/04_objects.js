// const rasoUser = new Object()    // singleton object
const rasoUser = {}       // non-singleton object

rasoUser.id = "123abc"
rasoUser.name = "Sammy"
rasoUser.isLoggedIn = false

// console.log(rasoUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raso",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2 }
// console.log(obj3);   //nested object

const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2)    // {} is a optional parameter which is act as target i.e. all the objects are store in {}
// console.log(obj5);

const obj6 = {...obj1, ...obj2}
// console.log(obj6);

// When values are comes from Database
const users = [
    {
        id: 1,
        email: "test1@gmail.com",    
    },
    {
        id: 2,
        email: "test2@gmail.com",    
    },
    {
        id: 3,
        email: "test3@gmail.com",    
    },
    {
        id: 4,
        email: "test4@gmail.com",    
    },
]

users[1].email
// console.log(rasoUser);

// console.log(Object.keys(rasoUser));   // output is array thus we can apply loop on it
// console.log(Object.values(rasoUser));  // output is loop
// console.log(Object.entries(rasoUser));  // every key value pair is converted in a array which all inside a single array


// console.log(rasoUser.hasOwnProperty('isLoggedIn'));


// Destructor of object
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// JSON api
// {
//     "name": "raso",
//     "coursename": "JavaScript",
//     "price": "999"
// }

[
    {},
    {},
    {}
]



