/*In JavaScript, scope defines where a variable can be accessed in your code: global scope means a variable is available everywhere, function scope means it’s only inside that function, and block scope (with let and const) means it’s only inside the { } block where it was declared */

let city = "Ujjain"; // global
function showCity() {
  console.log(city); // accessible
}
showCity(); // Ujjain


function greet() {
  let name = "Tarun"; // local
  console.log("Hello " + name);
}
greet(); // Hello Tarun
console.log(name); // ❌ Error: name is not defined


{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10, 20
}
console.log(x); // ❌ Error


//lexical scope(scope chain)
function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    console.log(outerVar); // accessible
  }
  inner();
}
outer(); // I’m outside!


//let and const are block scope means only accesible inside {}
//In JavaScript, var is a keyword used to declare variables, and those variables are either function‑scoped (if declared inside a function) or globally scoped (if declared outside), which means they don’t respect block scope like let and const do.

console.log(y); // undefined
var y = 5;


//scope behaves a little differently in the browser console versus the Node.js environment, even though the core rules are the same.