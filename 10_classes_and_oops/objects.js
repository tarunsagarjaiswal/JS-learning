

function multiply5(num) {
    return 5*num
}

multiply5.power = 2;

console.log(multiply5(5));  //25
console.log(multiply5.power);   //2
console.log(multiply5.prototype);   //{}     bcauz the fxn protype contains the property and the method, so the pointer this is pointing to that context and it is {}.

/* The Breakdown
1. console.log(multiply5(5)); ➔ 25
This is a normal function execution. You passed 5 into the parameter num, and it returned 5 * 5.

2. console.log(multiply5.power); ➔ 2
This is where JS flexes its weirdness. In JavaScript, functions are just objects. Because they are objects under the hood, you can slap properties directly onto them just like you would with a regular object. You gave the multiply5 object a property called power and set it to 2.
(Note: Adding properties to a function like this doesn't change how the function runs unless you specifically reference that property inside the function body).

3. console.log(multiply5.prototype); ➔ {}
By default, every standard function you create in JavaScript automatically gets a prototype property attached to it. This is essentially an empty object (it actually contains a hidden constructor property pointing back to the multiply5 function). JS puts this here automatically just in case you decide to use multiply5 to build objects later using the new keyword (e.g., const myMath = new multiply5()).

The TL;DR Connection:
This perfectly proves the prototypal behavior we just talked about. Even a function is just an object, which means it can hold its own properties (power) and holds a reference to a prototype object to enable the prototype chain. */

function createUser(userName, score) {
    this.userName = userName;
    this.score= score;
}

//the properties successfully injected in prototype
createUser.prototype.increament = function() {
    this.score++;   //for making to stick to its comntext.
};

createUser.prototype.printPrice = function() {
    console.log(`price is ${this.score}`);
    
};

//without new we cant use its propeties created by us in prototype. the newly created object gets linked to the prtotype prooperty of the constructor fxn.
const userOne = new createUser("Tarun_Milk", 20);
const userTwo = new createUser("Saavi_Tea", 50);

userOne.printPrice();   //price is 20


