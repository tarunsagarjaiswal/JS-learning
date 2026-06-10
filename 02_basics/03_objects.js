//objects can be declared in two ways ==>  1> by literal, 2> by constructor 

//In JavaScript, a singleton is a design pattern that ensures only one instance of a class or object exists throughout the application, providing a single global point of access. It’s commonly used for shared resources like configuration managers, logging services, or database connections.

//when we declare object like literal than singleton is not formed and forms in constructor declaration

//he Object.create() method in JavaScript is used to create a new object with a specified prototype. It’s a powerful way to control inheritance and prototype chains.

/*  object literals declaration  */

//symbol declartion
const mySym = Symbol("key1")

const JsUser = {
    //its property like name, age, email, etc are in string and it by default like name === "name",etc.
    name: "Tarun",
    "full name": "Tarun Sagar Jaiswal",
    [mySym]: "myKey1",      //syntax of using symbol as property in object
    age : 19,
    Email: "tarun@google.com",
    location: "Mumbai",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Friday"],
}

//to access literal object property
// console.log(JsUser.name);       //   Tarun

// console.log(JsUser["name"]);    //this method is more used bcauz when the prop is defined in string also then we can access it but with JsUser.full name it will give error

// console.log(JsUser["full name"]);       //  Tarun Sagar Jaiswal

// console.log(JsUser[mySym]);         //out =>  myKey1   and for accessing it can only be done by JsUser[mySym]


// The Object.freeze() method in JavaScript is used to make an object immutable — meaning you cannot add, remove, or change its properties once it’s frozen.
JsUser.Email = "tarun@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.Email = "tarun@microsoft.com"        //cant be changed as object JsUser is freezed

// console.log(JsUser);
/*output =>       {
                    name: 'Tarun',
                    'full name': 'Tarun Sagar Jaiswal',
                    age: 19,
                    Email: 'tarun@chatgpt.com',
                    location: 'Mumbai',
                    isLoggedIn: 'false',
                    lastLoginDays: [ 'Monday', 'Friday' ],
                    Symbol(key1): 'myKey1'
                  }  */

                    
/* Objects in JS are dynamic → you can add methods/properties anytime.

Methods are just functions stored as properties.

This is different from defining methods inside the object literal:*/

JsUser.greeting = function() {
    console.log("hello JS user");
}

console.log(JsUser.greeting());     //out =>    hello JS user  (on next line)  undefined

JsUser.greetingTwo = function() {
    console.log(`hello JS user, ${"Tarun"}`);
}

console.log(JsUser.greetingTwo());       //out =>    hello JS user, Tarun  (on next line)  undefined





