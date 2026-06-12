//Immediately Invoked Function Expression (IIFE)
/*An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that runs as soon as it’s defined. It’s wrapped in parentheses to make it an expression, and then immediately followed by another pair of parentheses to execute it. */

(function chai() {
    console.log("IIFE executed!");
})();       //semicolon is important as if we again want another fxn to IIFE then without semicolon the first fxn context is invoked but it dont know where to stop that's why we use semicolon

//The first () → turns the function into an expression.
// The second () → invokes it right away.

(function(name) {
    console.log(`Hello, ${name}!`);
})("Tarun");
// Output: Hello, Tarun!

/*Why Use IIFE?
Avoids polluting the global scope (creates a private scope).

Useful for initialization code.

Often used in older JS patterns before ES6 modules. */

//Creates private variables and functions that can’t be accessed outside.

//Perfect for setup code that should run once. or cant be accessed again.

(function() {
    console.log("Runs once!");
})();

// ❌ Can't call it again — no name, no reference


