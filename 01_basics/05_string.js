const name = "Tarun"

const repoCount = 4

// console.log(name + repoCount + " Value");   //old syntax and not so used in todays lihfe

// console.log(`My name is ${"Tarun"} and my repo count is ${4}`);      // modern syntax of printing string,  method is **String interpolation in JavaScript means inserting variables or expressions directly inside a string, most commonly using template literals with backticks (`...`) and the${}syntax

//other way to declare a string
const gameName = new String('tarunsus');   //new String('tarunsus') creates a String object     //it is like a key,value pair  where key =>idx , value => character at that index
// console.log(gameName[1]);

// console.log(name[0]);

//Every object in JavaScript has a hidden link to its prototype
//Some of the commonly available methods:

// .toUpperCase() → "TARUNSUS"

// .toLowerCase() → "tarunsus"

// .charAt(index) → returns character at position
console.log(gameName.__proto__);        //to see it s object.
//now we are using proto fxn or method =s of string

// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('u',4));       //character , after what index u wabt to find
// console.log(gameName.toUpperCase())         //actual string dosent changed bcauz it is primitive and we take copy

const newString = gameName.substring(2, 5);     //start idx, prints upto end idx - 1
console.log(newString);

const anotherString = gameName.slice(-5,-1);        //negative means start froim last index in slice and for positive works as substring
console.log(anotherString);

// In JavaScript, trim() is a string method that removes whitespace from both ends of a string. It doesn’t affect the middle spaces, only the leading and trailing ones.
/* Method	What it does
trim()	Removes spaces from both ends
trimStart()	Removes spaces only from the beginning
trimEnd()	Removes spaces only from the end */

const newStringOne = "    Ta  r u n   "
console.log(newStringOne.trim());

const url = "http://tarun.com/tarun%20sagar"
console.log(url.replace("%20", "-"));       //In JavaScript, replace() is a string method used to replace part of a string with another value. It can take either a substring or a regular expression as the search pattern.   Syntax: str.replace(searchValue, newValue)

//In JavaScript, includes() is a method used to check if a string or array contains a certain value. It returns a boolean (true or false).
console.log(url.includes("tarun") );

// In JavaScript, split() is a string method that divides a string into an array of substrings based on a specified separator.
const stringDemo = "tarun-hell-sus-brah";
console.log(stringDemo.split("-"));
console.log(stringDemo.split("-", 2));      //the number is a limiter that only prints two or Limit (optional): Maximum number of splits to return.







