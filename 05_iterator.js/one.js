//for, while and do-while loop are same as we studied in cpp.

/*********** for of loop ***********/

//The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets).
//syntax -> 
/*
for (element of iterable) {
   code block
}
 */

let arr = [1, 2, 3, 4]
for(let i of arr) {
    console.log(i);         //out =>  1 2 3 4
}

for (const iterator of "SAAVI") {
    console.log(iterator);   //S A A V I
}

//  MAPS
// In JavaScript, a Map is a special object introduced in ES6 that stores key‑value pairs.

/*
🔹 Key Features of Map
    Keys can be any type → strings, numbers, objects, functions.

    Insertion order preserved → iteration happens in the order items were added.

    Unique keys → each key can only appear once.

    Size property → map.size gives the number of entries directly.

    Safe from prototype pollution → unlike objects, Maps don’t have default inherited keys. 
*/

// Create a Map
const myMap = new Map();

// Add key-value pairs
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set({id: 1}, "objectKey");

// Get values
console.log(myMap.get("a")); // 1

// Check existence
console.log(myMap.has("b")); // true

// Size
console.log(myMap.size); // 3

// Delete
myMap.delete("b");

// Iterate
for (let [key, value] of myMap) {
  console.log(key, value);              //out => a 1  { id: 1 } objectKey

}

const mp = new Map();
mp.set("IN", "India")
mp.set("UK", "United Kingdom")
mp.set("FR", "France")

for(const iterat of mp) {
    console.log(iterat);
    
}
/*out =>    [ 'IN', 'India' ]
[ 'UK', 'United Kingdom' ]
[ 'FR', 'France' ] */

console.log(mp);        //out   =>  Map(3) { 'IN' => 'India', 'UK' => 'United Kingdom', 'FR' => 'France' }


// Feature	Map	Object
// Key types            	Any (string, number, object, function)	Only string or symbol
// Order            	    Preserves insertion order           	Keys not guaranteed ordered
// Size	                    map.size                                Must use Object.keys(obj).length
// Iteration            	Directly iterable (for...of)	        Must use for...in or helpers
// Default keys         	None	                                inherits prototype keys
// Performance          	Optimized for frequent add/remove   	Less efficient for dynamic key sets
