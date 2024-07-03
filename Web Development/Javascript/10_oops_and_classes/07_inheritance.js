class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCouse(){
        console.log(`A new course was added by ${this.usernmae}`);
    }
}

const raso = new Teacher("raso", "raso@gmail.com", "123")

raso.addCouse()

const masalaChai = new User("masalaChai")
// masalaChai.addCouse()
masalaChai.logMe()

console.log(raso == masalaChai);
console.log(raso == Teacher);
console.log(raso instanceof Teacher);
console.log(raso instanceof User);




















