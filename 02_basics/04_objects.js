//You’re creating a new empty object using the Object constructor. It’s equivalent to: const tinderUser = {};
const tinderUser = new Object();        //singleton object or constructor object
console.log(tinderUser);        //out  =>  {}

tinderUser.id = "420xyz"
tinderUser.name = "Saavi"
tinderUser.isLoggedIN = false

// console.log(tinderUser);    //  { id: '420xyz', name: 'Saavi', isLoggedIN: false }

const regularUser = {
    email: "tarun@elon.com",
    fullName:  {
        userFullName: {
            firstName: "Tarun Sagar",
            lastName: "Jaiswal",
        },
    },
}

console.log(regularUser.fullName.userFullName.lastName);    //  output =>   Jaiswal

//merging of object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2};
// console.log(obj4);      //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: { '5': 'e', '6': 'f' } }

/*The Object.assign() method in JavaScript is used to copy properties from one or more source objects into a target object. It’s super handy for merging objects or cloning them (shallow copy).
syntax: Object.assign(target, sources)
 */

// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);      //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj6 = {...obj1, ...obj2}
console.log(obj6);      //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = [
    {
        id1: 1,
        email1: "tarun@google.com",
    },

    {
        id2: 2,
        email2: "tarun@chatgpt.com",
    },

    {
        id3: 2,
        email3: "tarun@microsoft.com",
    },
]

console.log(user[1].email2);    //  tarun@chatgpt.com

//Returns an array of property names (keys).
console.log(Object.keys(tinderUser));       //  [ 'id', 'name', 'isLoggedIN' ]

//Returns an array of property values.
console.log(Object.values(tinderUser));     //  [ '420xyz', 'Saavi', false ]

//Returns an array of property values.
console.log(Object.entries(tinderUser));    //  [ [ 'id', '420xyz' ], [ 'name', 'Saavi' ], [ 'isLoggedIN', false ] ]

// The hasOwnProperty() method in JavaScript is used to check whether an object has a specific property as its own property 
console.log(tinderUser.hasOwnProperty("isLogged"));     //  false



/*OBJECT  DESTRUCTING*/

// Basic Object Destructuring
const user = {
     name: "Tarun",
      age: 22 
            }

const { name, age } = user;
console.log(name); // Tarun
console.log(age);  // 22


// Aliases (Renaming Variables)
const person = { name: "Tarun", city: "Ujjain" };

const { name: userName, city: hometown } = person;
console.log(userName); // Tarun
console.log(hometown); // Ujjain


// Default Values
const student = { id: 1, grade: "A" };

const { grade, country = "India" } = student;
console.log(grade);   // A
console.log(country); // India (default used because property missing)  or we can say it is dynamically allocates.


// Nested Object Destructuring
const employee = {
  id: 101,
  details: { dept: "EE", city: "Indore" }
};

const { details: { dept, city } } = employee;
console.log(dept); // EE
console.log(city); // Indore

/****************** API's and JSON *******************/

/*What is an API?
API = Application Programming Interface

It’s like a messenger between two software systems.

It defines rules for how one program can talk to another.

Example:

When you log in with Google on a website, that site uses Google’s Login API.

The API lets the site request your profile info securely without knowing Google’s internal code.

👉 Think of it as a restaurant menu:

You order food (make a request).

The kitchen (server) prepares it.

The waiter (API) delivers it back to you.*/



/*What is JSON?
JSON = JavaScript Object Notation

It’s a data format used to exchange information between systems.

Human-readable and lightweight.

Looks like JavaScript objects but is just text.

Example JSON
{
  "name": "Tarun",
  "age": 22,
  "skills": ["JavaScript", "C++", "Git"]
}
Keys are always in quotes.

Values can be strings, numbers, booleans, arrays, or nested objects.*/



/* API + JSON Together
Most modern APIs send and receive data in JSON format.

Example:
You call a weather API:

Code
GET https://api.weather.com/current?city=Ujjain

Response (JSON):

{
  "city": "Ujjain",
  "temperature": 32,
  "condition": "Sunny"
}

Your app can now use this JSON to display weather info.*/




/* Key Takeaway
API = the bridge that lets apps talk.

JSON = the language they often use to exchange data. */