//  so the first control flow is (if statements)

const { use } = require("react");

/*The operator !== in JavaScript is the strict inequality operator.
👉 It checks two things at once:

Value → Are the values different?
Type → Are the types different?

If either the value or the type is not the same, it returns true. */

console.log(5 !== "5");   // true (number vs string)
console.log(5 !== 5);     // false (same value, same type)
console.log(null !== undefined); // true (different types)

// != → does type coercion, can give unexpected results.
// !== → safer, checks both value and type, avoids surprises.

//Coercion in JavaScript means automatic type conversion 

//NaN is never equal to itself, both operators agree.
console.log(NaN != NaN);    //true
console.log(NaN !== NaN);   //true

const score = 10
//shorthand of if else but for only one line and a semicolon with it, as by implicitely it will give currly braces

if (score > 50)     console.log("yeeahh");      
else    console.log("naahh");

/*if else if is also here like cpp */

const userLoggedIn = true;
const debitCard = true;
const loginFromGoogle = false;
const loginFromEmail = false;


if(userLoggedIn && debitCard)
    console.log("Alloe to buy course");

if (loginFromGoogle || loginFromEmail)
    console.log("User logged in");
    


