// // In JavaScript, this is a special keyword that refers to the context in which a function is executed. Think of it as a pointer to the object that is currently calling the function.

// const user = {
//     username: "Tarun",
//     price: 999,

//     welcomeMessage: function() {
//         //this is to used to access the current context
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();          //out =>    Tarun, welcome to website
//                                          // {
//                                          //   username: 'Tarun',
//                                          //   price: 999,
//                                          //   welcomeMessage: [Function: welcomeMessage]
//                                          // }

// user.username = "Saavi"

// // Since this always points to the current object, it reflects the updated value.
// user.welcomeMessage();          //out =>    Saavi, welcome to website
//                                          // {
//                                          //   username: 'Saavi',
//                                          //   price: 999,
//                                          //   welcomeMessage: [Function: welcomeMessage]
//                                          // }

// console.log(this);       //out  =>  {}

// // Global scope (Node) → this = {}.

// // Global scope (Browser) → this = window.



/*Top level in Node → this = {} (module exports).

Inside a plain function in Node (non‑strict) → this = global.

Inside a plain function in Browser (non‑strict) → this = window.

Strict mode → this = undefined if not bound explicitly. */

// function chai() {
//     console.log(this);   
// }

// chai();     //out   =>  // Object [global] {...}  and Prints the global object with Node APIs like setTimeout, process, Buffer, etc


// function chai() {
//     let username = "Saavi"
//     console.log(this.username);   
// }

// chai();     //out   =>  undefined  means this is not worked in a function

// const chai2 = function() {
//     let username = "Saavi"
//     console.log(this.username);  
// }

// chai2();    //out   => undefined

// const chai3 = () => {
//      let username = "Saavi"
//     console.log(this.username);
// }

// chai3();    //undefined

// const chai3 = () => {
//      let username = "Saavi"
//     console.log(this);
// }

// chai3();    //      {}

const user1 = {
  name: "Tarun",
  greet: function() {
    console.log(this.name);
  }
};

user1.greet(); // Output → "Tarun"
// Here, this points to the object (user) because the function is called as a method of that object.

const user2 = {
  name: "Tarun",
  greet: () => {
    console.log(this.name);
  }
};

user2.greet(); // Output → undefined
/* Here, this does not point to user.
Arrow functions don’t create their own this; they inherit it from the outer scope.
Since the outer scope here is the global/module scope (not user), this.name is undefined */

//one more thing just for knowledge that when we use currly braces in the arrow fxn the we have to write the return statement but we write the things in (..) then it by default return it.

const addTwo = (num1, num2) => ({username: "Saavi"})

console.log(addTwo(1,2));   //out =>    { username: 'Saavi' }
