// Immediately Invoked Function Expression (IIFE)
// we use iife to immediately run the function . And also remove the pollution from global scope

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
}) ();     // ; to end iife function

// 1st () definition  
// 2nd () executation

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("raso")



