// /*In JavaScript, scope defines where a variable can be accessed in your code: global scope means a variable is available everywhere, function scope means it’s only inside that function, and block scope (with let and const) means it’s only inside the { } block where it was declared */

// let city = "Ujjain"; // global
// function showCity() {
//   console.log(city); // accessible
// }
// showCity(); // Ujjain


// function greet() {
//   let name = "Tarun"; // local
//   console.log("Hello " + name);
// }
// greet(); // Hello Tarun
// console.log(name); // ❌ Error: name is not defined


// {
//   let x = 10;
//   const y = 20;
//   console.log(x, y); // 10, 20
// }
// console.log(x); // ❌ Error


// //lexical scope(scope chain)
// function outer() {
//   let outerVar = "I'm outside!";
//   function inner() {
//     console.log(outerVar); // accessible
//   }
//   inner();
// }
// outer(); // I’m outside!


// //let and const are block scope means only accesible inside {}
// //In JavaScript, var is a keyword used to declare variables, and those variables are either function‑scoped (if declared inside a function) or globally scoped (if declared outside), which means they don’t respect block scope like let and const do.

// console.log(y); // undefined
// var y = 5;


// //scope behaves a little differently in the browser console versus the Node.js environment, even though the core rules are the same.

// /************ CLOSURE **************/

// //A closure in JavaScript is a function that retains access to variables from its outer scope even after that outer function has finished executing

// function outer() {
//   let count = 0;   // private variable
//   return function inner() {
//     count++;
//     return count;
//   };
// }

// const increment = outer();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3

// //Here, inner() forms a closure over count. Even though outer() has finished, count persists because of the closure.
// //It’s created automatically whenever you define a function inside another function.

// // The inner function can access variables declared in the outer function, even after the outer function has returned.




/****************** INTERSETING ->  HOISTED ********************/
console.log(addOne(5));   //6

//Function Declarations: Entire function definitions are hoisted.
function addOne(num) {
  return num + 1;
}

console.log(addTwo(7));   //error  ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
  return num + 2;
}

/*Variables declared with let or const are hoisted but remain in the temporal dead zone until the line of initialization.

So when you try to call addTwo(7) before the assignment, JavaScript throws a ReferenceError because addTwo isn’t initialized yet. */