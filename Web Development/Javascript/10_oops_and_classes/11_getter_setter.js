class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()   
    }

    set email(value){
        this._email = value
    }

    // get password(){
    //     return this.password.toUpperCase()
    // }

    // set password(value){
    //     this.password = value.toUpperCase()    // RangeError: Maximum call stack size exceeded
    // }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()    // RangeError: Maximum call stack size exceeded
    }

}

// const raso = new User("raso@gmail.com", "123")
const raso = new User("raso@gmail.com", "abc")

console.log(raso.email);
console.log(raso.password);












