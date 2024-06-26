// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeetings = "Hello world"

for (const greet of greeetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps

const map = new Map()
map.set('In', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const key of map) {    // map are iterable
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   // objects are not iterable
//     console.log(key, ':-', value);
// }



















