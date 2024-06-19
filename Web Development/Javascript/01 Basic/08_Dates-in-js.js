//  Dates

let myDate = new Date()
console.log(myDate);                        // 2024-06-17T17:26:58.772Z
console.log(myDate.toString());             // Mon Jun 17 2024 17:26:58 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());         // Mon Jun 17 2024
console.log(myDate.toISOString());          // 2024-06-17T17:26:58.772Z
console.log(myDate.toJSON());               // 2024-06-17T17:26:58.772Z
console.log(myDate.toLocaleDateString());   // 6/17/2024
console.log(myDate.toLocaleString());       // 6/17/2024, 5:26:58 PM
console.log(myDate.toString());             // 6/17/2024, 5:26:58 PM
console.log(myDate.toTimeString());         // 17:26:58 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());          // Mon, 17 Jun 2024 17:26:58 GMT
console.log(myDate.getTimezoneOffset());    // 0
console.log(myDate.getHours());             // 17
console.log(myDate.getMonth());             // 5

console.log(typeof myDate);