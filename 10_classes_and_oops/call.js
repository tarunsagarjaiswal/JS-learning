function setUserName(userName) {
    this.userName = userName;
    // return this.userName;        //implicitely
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    /* The .call() Method: This is the most critical part of your snippet.

    If you had simply called setUserName(username) inside createUser, the this inside setUserName would refer to the global object (or undefined in strict mode), meaning your user object would not receive the userName property.

    By using setUserName.call(this, username), you explicitly "borrow" the setUserName function and force it to run using the current execution context (this) of the createUser function. */  


    this.email = email;
    this.password = password;
}

const user = new createUser("Saavi", "tarun@google.com", "#$@");
console.log(user);  /*createUser { userName: 'Saavi',   email: 'tarun@google.com', password: '#$@' } */
