/* To understand this, think of Classes as blueprints for creating objects. Instead of writing the same code over and over again, we create a "Base" blueprint (the parent) and then "Extend" it to create more specific versions (the children). */

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is :- ${this.username}`);
    }
};

//The keyword extends tells JavaScript: "A Teacher is a type of User." It inherits all the properties and methods from User automatically.
class Teacher extends User {
    //When you write a constructor inside the Teacher class, you are effectively overriding the default behavior of the User class to make it fit your specific needs.

    constructor(username, email, password) {
        super(username);        //its the same thing as we use .call in behind the scene
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`);
        
    }
};

const user =  new Teacher("Tarun", "Saavi@gmail.com", 123);

user.logMe();   //Username is :- Tarun
user.addCourse();   //A new course is added by Tarun

const tea = new User("Saavi");
// tea.addCourse()         //gives error bcauz it dosent inherits it child things.

console.log(user instanceof Teacher);   //true
console.log(user instanceof User);  //true
console.log(user === Teacher);      //false bcauz it have the instance not the exact class.
