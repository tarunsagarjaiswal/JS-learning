// What is a Function?
// A function is a reusable block of code that performs a specific task.

// You can define it once and call it multiple times.

// Functions help keep code organized and avoid repetition.

function greet() {
    console.log("hello Tarun");
    
}

greet       //out => it dont gives output as the writting name only means the reference of the function
greet();    //out  =>   hello Tarun

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);   
// }

// addTwoNumbers(3, 4);        //  7
// addTwoNumbers(3, "2");      //  32
// addTwoNumbers(3, null);     //3
// addTwoNumbers(3, "a");      //3a

/*
Parameter	    Function definition          function add(a, b) → a, b
Argument	    Function call	             add(5, 3) → 5, 3 
*/

function addNumber(number1, number2) {
    // let result = number1 + number2
    // return result;
    // console.log("boyzz");   //the things written after return arrnt be going to execute 

    // or other way to write
    return number1 + number2;
}

let result = addNumber(2, 5);
console.log(result);    //out =>   7

function loginUserMessage(username) {
    if(!username)   //or if(username === undefined)
       return (`please enter a username`);
    else
        return (`${username} just logged in`);    
}

console.log(loginUserMessage("pappa"));     //out   =>  pappa just logged in
console.log(loginUserMessage());            //out   =>  please enter a usename

//in if() statement, the undefined is treated as false.


//function Expression
const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // 24



//Arrow function
const square = (n) => n * n;

console.log(square(5)); // 25



//default parameter
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser("Tarun"); // Hello Tarun
greetUser();        // Hello Guest


//function as first-class citizens
// In JavaScript, functions can:

// . Be stored in variables.

// . Be passed as arguments.

// . Be returned from other functions.


console.log("2" > "10");    //out =>    true bcauz it string comparision starts checking lexiographically.
console.log("2" > 10);      //otu =>    false bcauz > is an numeric operator so JS converts string into number as the other is also an number.


function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 300));     //out =>    100

// to print all ->
function calculateCartPrice2(...num1) {
    return num1
}

//this works because the rest parameter ...num1 gathers all the arguments you pass into the function into a single array. When you call calculateCartPrice2
//(100, 200, 300), the function doesn’t treat them as separate values but instead collects them into [100, 200, 300], and since the function returns num1, the output
//is that array.
console.log(calculateCartPrice2(100, 200, 300));     //out =>    [ 100, 200, 300 ]


function calculateCartPrice3(val1,val2,...num1) {
    return num1
}
console.log(calculateCartPrice3(100,200,300,500,2000));     ///out =>   [ 300, 500, 2000 ]

const user = {
    name: "Tarun",
    age: 19,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);   
}

handleObject(user);     //out =>    Username is Tarun and age is 19

handleObject({          //out =>    Username is Hitesh and age is 30
    name: "Hitesh",
    age: 30,
})

const newArray = [100, 200, 400, 800]

function secondArrayElement(getArray) {
    return getArray[1]
}

console.log(secondArrayElement(newArray));      // 200

console.log(secondArrayElement([1,2,3,4,5]));   //2

