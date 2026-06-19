const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

let pi = Math.PI;
console.log(Math.PI);   //3.141592653589793
pi = 4;
console.log(Math.PI);   //3.141592653589793  cant changed as its writable is false.

console.log(descripter);    /* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

  let User = {
    name: "FatFree milk",
    price: 250,
    isAvaliable: true,

    order: function() {
        console.log("milk nhi mil rhi");
    }

  }

  console.log(Object.getOwnPropertyDescriptor(User, "name"));   /*{
  value: 'FatFree milk',
  writable: true,
  enumerable: true,
  configurable: true
} */

  Object.defineProperty(User, "name", {
    writable: false,    //we  cant rewite the name property
    enumerable: false,  //we cant iterate over name property
  })

// console.log(User.name);     //FatFree milk
// User.name = "Coffee";
// console.log(User.name);     //FatFree milk

for (const [key, value] of Object.entries(User)) {
    console.log(`${key} -> ${value}`);
    
}

/*out =>
 price -> 250
isAvaliable -> true
order -> function() {
        console.log("milk nhi mil rhi");
    }
        as you can see name is not printed */
        

for (const [key, value] of Object.entries(User)) {
    if(typeof(value) !== 'function')
    console.log(`${key} -> ${value}`);
    
}
/* out =>
 price -> 250
isAvaliable -> true
*/