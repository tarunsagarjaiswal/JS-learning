//we are talking after ES6 things

class User {
    constructor(username, email, password) {     //when you intialize objects with the new keyword then constructor is called.
        this.username = username;
        this.email = email;
        this.password=  password;
    }

    //in class we make fxns like this format
    encryptPass() {
        return `${this.password}#$@%!`
    }

    changeUserName() {
        return this.username.toUpperCase();
    }
};

const user = new User("tarunsaavi", "T&S@google.com", 43267);

console.log(user.encryptPass());        //43267#$@%!
console.log(user.changeUserName());     //TARUNSAAVI


/*
//Behind the scene of the class
function setDetail(username, email, password) {
    this.username = username;
    this.email = email;
    this.password=  password;
}

setDetail.prototype.encryptPass = function () {
    return `${this.password}#$@%!`
}

setDetail.prototype.changeUserName = function () {
    return this.username.toUpperCase();
}

const tea = new setDetail("tarunsaavi", "T&S@google.com", 43267)

console.log(tea.encryptPass());     //43267#$@%!

console.log(tea.changeUserName());      //TARUNSAAVI
*/