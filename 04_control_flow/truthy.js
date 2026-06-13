//falsy value ->    false, 0 ,-0, 0n, "", null, undefined, NaN

//Truthy value -> except falsy values everthing is truthy like -> "false", '0', " ", [], {}, function() {}, etc.

// const user = []
// if(user.length == 0)
//     console.log("Array is empty");

// const userObj = {}
// if(Object.keys(userObj).length == 0)
//     console.log("Object is empty");
    
console.log(false == 0);    //true
console.log(false == '');    //true
console.log(0 == '');    //true


/*********** Nullish Coalescing Operator (??) ***********/

//Used to provide a default value when the left-hand side is null or undefined.
// It does not treat 0, "", or false as nullish — only null and undefined.

//syntax : let result = value ?? defaultValue;
//If value is null or undefined → defaultValue is used. Otherwise → value is returned.

let name = null;
let user = name ?? "Guest";
console.log(user); // "Guest"

let count = 0;
let total = count ?? 10;
console.log(total); // 0 (because 0 is not null/undefined)

//Use ?? when you want defaults only for null/undefined, not for all falsy values.

let val1;
val1 = null ?? 10 ?? 16
console.log(val1);  //10  (first value will be going to assign after null or undefined)

let val2;
val2 = null ?? undefined ?? 16
console.log(val2);  //16

let val3;
val3 = null ?? undefined ?? null
console.log(val3);  //16

/*********ternary operator ***********/
// The ternary operator is a shorthand way to write conditional statements.
// It’s called “ternary” because it takes three operands:

//syntax : condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

const score = 70
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade);     //C







