const User = {
    _email: "raso@gmail.com",   // _ is used for private but get and set can overwrite this
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const raso = Object.create(User)
console.log(raso.email);