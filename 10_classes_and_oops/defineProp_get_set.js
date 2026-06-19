// This is a Constructor Function - the older, pre-ES6 way of creating classes.
// Under the hood, modern ES6 classes compile down to exactly this!
function User(email, password) {
    
    // 1. DIRECT ASSIGNMENT: We store the incoming values directly into 
    // internal/private properties using the underscore convention (_email).
    // Note: This does NOT trigger the setter because we are assigning directly 
    // to '_email', and the getter/setter for 'email' hasn't even been defined yet.
    this._email = email;
    this._password = password;

    // 2. DEFINING THE GETTER & SETTER: 
    // Object.defineProperty is a low-level method that gives us fine-grained control.
    // It takes 3 arguments: (the object to modify, the property name, { the configuration })
    Object.defineProperty(this, 'email', {
        
        // 4. THE GETTER: Triggered automatically when someone asks for 'user.email'
        get: function() {
            // It reads the raw data from the hidden '_email' property, 
            // transforms it to uppercase, and hands it back.
            return this._email.toUpperCase();
        },

        // THE SETTER: Triggered automatically if someone tries to change 'user.email'
        // (e.g., user.email = "new@doc.com")
        set: function(value) {
            // CRITICAL STEP: We save the new value into the internal '_email'.
            // If we wrote 'this.email = value' here, it would trigger this exact 
            // setter again and again, causing the "Maximum call stack size exceeded" error!
            this._email = value;
        }
    });
}

// Execution starts here:
// The 'new' keyword creates a fresh object and runs the User function.
const user = new User("Saavi@doc.com", "abc");

// 3. THE ACCESS: We ask for the public '.email' property. 
// JavaScript sees that 'email' was defined via Object.defineProperty, 
// so it immediately runs the 'get' function attached to it.
console.log(user.email);    // Output: SAAVI@DOC.COM