/* 
map() Method
Creates a new array by transforming each element.

Always returns an array of the same length.

Useful for applying a function to every element. */

/* 
filter() Method
Creates a new array with elements that pass a test.

Returns an array that may be shorter or empty.

Useful for selecting a subset of elements.
 */

const arr = [1, 2, 3, 4, 5, 6, 7]

const newArr = arr.map( (num) => num + 10)

console.log(newArr);    // out => [ 11, 12, 13, 14, 15, 16, 17 ]

//Chaining means calling multiple methods one after another on the same object or value,
//  where each method returns something that allows the next method to run.

const chain = arr.map( (item) => item * 10).map( (item) => item + 1).filter( (item) => item > 40)
console.log(chain);     //out =>    [ 41, 51, 61, 71 ]


/*********** REDUCE METHOD **********/

// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// It’s powerful for aggregation (sum, product, max, min, flattening arrays, etc.).

//syntax :-
/*
array.reduce(function(accumulator, currentValue, index, array) {
  // return updated accumulator
}, initialValue);
accumulator → stores the running result

currentValue → current element being processed

index → position of element (optional)

array → the whole array (optional)

initialValue → starting value for accumulator (optional but recommended)
*/

const myArr = [1, 2, 3, 4, 5]

intialValue = 0
const total = myArr.reduce( (acc, currVal) => {
    console.log(`${acc} and ${currVal}`);
    return acc + currVal
}, intialValue)
// OUT =>   0 and 1 1 and 2  3 and 3   6 and 4    10 and 5

console.log(total);     //  15
