/* No, JavaScript does not have true classes like Java or C++. Instead, it uses something called Prototypes. The class keyword you see in JS is just a beautiful mask.

Here are your copy-pasteable, beginner-friendly notes to completely master this concept:

📝 My Notes: Does JavaScript Really Have Classes?
1. The Core Truth: It’s "Syntactic Sugar"
What is Syntactic Sugar? It means features added to a programming language to make the code sweeter (easier to read and write) for humans, but it doesn't change how the language works under the hood.

The Reality: In 2015, JavaScript introduced the class keyword. It was added purely to make developers coming from languages like Java, Python, or C++ feel comfortable.

When you type class in JavaScript, the V8 engine immediately translates it back into traditional JavaScript functions and prototypes behind the scenes.

2. True OOP vs. JavaScript's Way
True OOP (Java/C++): A Class is a strict blueprint, and objects are instances created copy-by-copy from that blueprint.

JavaScript (Prototypal): There are no real blueprints. Objects just link directly to other objects and borrow behaviors from them. This behavior-sharing system is called Prototypal Inheritance.

*/

//literal object means literally it is the thing or base unit 
//OBJECT -> it is collection of properties and methods
const User = {
    userName: "Saavi",
    loginCount: 10,
    isLoggedIn: true,

    getUserDetails: function() {
        console.log("got user details from server");
        console.log(this.userName); //"this" is imp as the complier dont know that we are talking about which userName like if we have too many objects then it will make you in trouble so this is refers to current context.
        
    },
}

console.log(User.userName);
console.log(User.getUserDetails());


/* new is actually a cosntructor fxn, this new keyword helps you to make multiple instances from a single object literal or it helps to make new context from a single object*/
// const promisezone = new Promise();
// const date = new Date();


/* when you use new keyword then JS follows this strictly 4 steps

Step,What JavaScript Does,Behind the Scenes View
1. Creates an Empty Object,         "It instantly spawns a brand-new, empty JavaScript object.",        {}

2. Links the Prototype,              It links this new object's internal prototype chain (__proto__) to the constructor function’s prototype. This gives the object access to all shared methods.,  {} → User.prototype

3. Binds this,                      "It points the keyword this directly to our new empty object. Any time the function says this.name, it is injecting properties into that new object.",this = {}

4. Implicitly Returns,               It delivers the finished object back to your variable. You don't even have to type return inside the function!,Returns the filled object.*/

function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.userName}`);
        
    }

    return this;        //if you write or dont write, it is implicitily going ton happen.
};

const userOne = new user("Tarun", 5, true); 
const userTwo = new user("Saavi", 10, false);   

/* if we dont write the new keyword then we only got one instance then if we declare userTwo and sends to the the fxn then userOne also changes and holds same thing like userTwo. */

console.log(userOne);   /* user {
  userName: 'Saavi',
  loginCount: 10,
  isLoggedIn: false,
  greetings: [Function (anonymous)]
}  */

console.log(userTwo);   /*user {
  userName: 'Tarun',
  loginCount: 5,
  isLoggedIn: true,
  greetings: [Function (anonymous)]
} */

console.log(userOne.constructor);  //out =>  [Function: user]     //The .constructor property points directly back to the original blueprint function (user) that was used to build that specific object instance.

//The instanceof operator is a yes/no question that checks if an object was created by a specific blueprint function.
console.log(userOne instanceof user); // Outputs: true





