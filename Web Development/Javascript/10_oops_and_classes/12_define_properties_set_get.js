function User(email, password){
    this._email = email;
    this._password = password


    Object.defineProperty(this, 'email', {
    get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value.toUpperCase(); // Uppercase on set as well
        }
    })


    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value.toUpperCase(); // Uppercase on set as well
        }
    })
}

const raso = new User("raso@raso.com", "raso")

console.log(raso.email);
console.log(raso.password);












