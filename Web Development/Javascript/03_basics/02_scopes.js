// var c = 300
let a = 300   // global scope
if (true) {
    let a = 10    //block scope
    const b = 20   // block scope
    // var c = 30
    // c = 30
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);


// scope is different in browser and node






