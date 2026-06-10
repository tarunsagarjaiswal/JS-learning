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






