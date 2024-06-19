const accountId = 2633
let accountEmail = "example@gmail.com"
var accountPassword = "123456"
accountCity = "Noida"

let accountState;

// accountId = 2644   // not allowed

accountEmail = "email@gmail.com"
accountPassword =  "1233"
accountCity = "Delhi"

console.log(accountId);
console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var:
    beacause of issue in block scope and functional scope
*/