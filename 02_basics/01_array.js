// In JavaScript, an array is a special type of object used to store multiple values in a single variable. Think of it as a list where each item has an index (position).

//JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are zero-indexed

// JavaScript array-copy operations create shallow copies

const myArr = [0, 1, 2, 3, 4, true, "hellNah"]
console.log(myArr[6]); 
console.log(myArr);         //out  =.  [ 0, 1, 2, 3, 4, true, 'hellNah' ]


//another way to declare array
const anotherArr = new Array(1, 2, 3, 4);

//array also has its prototype and its prototype have the methods and also contain one more prototype

myArr.push(3)
myArr.push(9)
myArr.pop()
console.log(myArr);

anotherArr.unshift(32)      //put at the 0th idx and shift everthing by +1 index
console.log(anotherArr);       //out   =>  [ 32, 1, 2, 3, 4 ]

anotherArr.shift()          //deletes from the front and shift the things by -1 index
console.log(anotherArr);       //out  =>    [ 1, 2, 3, 4 ]

//In JavaScript, the includes() method is used on arrays to check if a certain element exists inside them. It returns a boolean (true or false).
console.log(anotherArr.includes(2))         //out   =>  true

console.log(anotherArr.indexOf(10));        
console.log(anotherArr.indexOf(1));         //out   =>   0

//In JavaScript, the join() method is used to convert all elements of an array into a single string, separated by whatever delimiter you specify.

// syntax :  array.join(separator)

const newArr = anotherArr.join();
console.log(newArr);        //out   =>  1,2,3,4    and also newArr typeof is string

console.log(anotherArr);       //out =>   [ 1, 2, 3, 4 ]

console.log(anotherArr.join("-"));      //out  =>   1-2-3-4

console.log(anotherArr.join(""));       //out =>    1234


/* slice    VS    splice*/
const arr = [0, 1, 2, 3, 4, 5];

console.log("A", arr);          //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = arr.slice(1, 3)    //3 is excludive
console.log(myn1);              //[ 1, 2 ]
console.log("B", arr);          //B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = arr.splice(1,3)       //3 is inclusive
console.log(myn2);              //[ 1, 2, 3 ]
console.log("B", arr);          //B [ 0, 4, 5 ]

/*
Feature	          slice()	        splice()
Return value	  New array	        Removed elements
Original array	  Unchanged	        Modified
Use case	      Copy/extract	    Add/remove/replace
*/

//slice() = “copy out”

// splice() = “cut and paste”










