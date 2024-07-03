function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)
    // SetUsername.call(username)   // .call is used to hold the reference
    SetUsername.call(this, username)   


    this.email = email
    this.password = password
}

const raso = new createUser("raso", "raso@fb.com", "123")
console.log(raso)







