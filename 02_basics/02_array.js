const marvel_heros = ["Strange", "Thor", "Wanda"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);      //[ 'Strange', 'Thor', 'Wanda', [ 'Superman', 'Flash', 'Batman' ] ]

// console.log(marvel_heros[3][1]);    //[ 'Strange', 'Thor', 'Wanda', [ 'Superman', 'Flash', 'Batman' ] ]


//In JavaScript, the concat() method is used to merge two or more arrays. It creates a new array without changing the existing ones.
const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);      //[ 'Strange', 'Thor', 'Wanda', 'Superman', 'Flash', 'Batman' ]



//another way to concat when we want to concat two or more than two
//The spread operator ([...arr1, ...arr2, ...arr3, and so on.]) in JavaScript is a super handy way to expand arrays (or objects) into individual elements. It’s often used for copying, merging, or passing array elements as arguments.
const new_heros = [...marvel_heros, ...dc_heros]
console.log(new_heros);


const anotherArray = [1, 2, 3, [4, 5,2], [6, 7, [2, 3]], 5]

// The flat() method in JavaScript is used to flatten nested arrays into a single array. By default, it flattens one level deep, but you can specify how many levels you want.

//syntax : array.flat(depth)

const realAnotherArr = anotherArray.flat(Infinity)
console.log(realAnotherArr);        /*[
                                        1, 2, 3, 4, 5,
                                        2, 6, 7, 2, 3,
                                        5
                                      ]*/

//In JavaScript, the Array.isArray() method is used to check whether a given value is an array. It returns a boolean (true or false).
console.log(Array.isArray("heheBoyzz"));       // false

//The Array.from() method in JavaScript is used to create a new array from an array‑like or iterable object (like strings, sets, maps, or arguments). It’s super flexible because you can also apply a mapping function while creating the array.
console.log(Array.from("Tarun"));               //[ 'T', 'a', 'r', 'u', 'n' ]

/* Array.from() expects an array‑like object (something with a length property and indexed elements, like {length: 3, 0: "a", 1: "b"}).

{name: "tarun"} is just a plain object. It does not have a length property or numeric keys.

Because of that, Array.from() treats it as having length = 0, so it produces an empty array.*/

console.log(Array.from({name: "tarun"}));       //out =>   []

let score1 = 100
let score2 = 200
let score3 = 300

//The Array.of() method in JavaScript is used to create a new array from a list of arguments. Unlike the Array constructor, it avoids confusing behavior with single numeric arguments.
console.log(Array.of(score1, score2, score3));      // [ 100, 200, 300 ]







