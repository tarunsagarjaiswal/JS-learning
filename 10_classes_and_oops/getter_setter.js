class User {
    constructor(email, password) {
        this.email = email;
        
        // 1. This looks like a normal property, but because a 'set password' 
        // method exists below, JavaScript automatically diverts this value ("abcjd") 
        // and sends it straight to the setter function.
        this.password = password; 
    }

    // 4. This getter is triggered automatically when you call 'user.password'.
    get password() {
        // It reads the internal '_password' variable, modifies it to uppercase, 
        // and returns "ABCJD".
        return this._password.toUpperCase();
    }

    // 2. This setter catches the value ("abcjd") sent from the constructor.
    set password(value) {
        // 3. CRITICAL STEP: We save the value into '_password' (with an underscore).
        // If we used 'this.password = value' here, it would call this setter again,
        // causing an infinite loop and throwing the "Maximum call stack size exceeded" error.
        this._password = value; 
    }
}

// Execution starts here:
// The constructor is called, passing "Saavi@doc.com" and "abcjd"
const user = new User("Saavi@doc.com", "abcjd");

// This triggers the GETTER method behind the scenes
console.log(user.password);     // Output: ABCJD

// This is a regular property access, no getter/setter involved here
console.log(user.email);        // Output: Saavi@doc.com
console.log(user.email);    //Saavi@doc.com

//we can password from outside as user using the property like normally.


/* 1. What are Getters and Setters?
Usually, when you create a property in a class (like this.email = email), you are just storing raw data. But sometimes, you want to control how that data is accessed or changed.

Getter (get): A method that gets triggered automatically when you try to read a property. It allows you to format or compute the data before handing it back (like returning the password in uppercase).

Setter (set): A method that gets triggered automatically when you try to change or assign a value to a property. It allows you to validate or modify the data before actually saving it.

The magic is that they look like normal properties from the outside, but they act like functions on the inside. Notice how you wrote console.log(user.password) and not user.password()? That is the power of getters. */



//error of maximum memory exceeded.
/* Here is exactly how JavaScript processes this, step-by-step, leading to the crash:

JavaScript sees this.password = value.

It says, "Oh, there is a setter called password. I need to send the data there!"

It jumps inside the setter function.

Inside the setter, it reads this.password = value again.

JavaScript says, "Oh, another assignment! I need to call the setter again!"

It jumps inside the setter again... and again... and again.

It keeps calling itself infinitely until the browser or Node.js runs out of memory and screams: "Maximum call stack size exceeded!" */





